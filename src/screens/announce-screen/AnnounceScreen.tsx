import React, {useCallback, useEffect, useState} from 'react';
import {
  AnnounceSafeAreaView,
  FormInput,
  FormField,
  ButtonSubmit,
  ButtonText,
  DropDownText,
  DropDownOptions,
  DropDownTextCondition,
  DropDownConditionOptions,
  DropDownIcon,
  ImageContainer,
  ImageWrapper,
  StyledImage,
  ButtonImages,
  Container,
  Remove,
} from './styles';

import auth from '@react-native-firebase/auth';

import {
  FlatList,
  KeyboardAvoidingView,
  Modal,
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {ScrollView} from 'react-native-gesture-handler';
import {
  ImageLibraryOptions,
  launchImageLibrary,
} from 'react-native-image-picker';

export default function AnnounceScreen() {
  const [conditionExpanded, setConditionExpanded] = useState(false);
  const [categoryExpanded, setCategoryExpanded] = useState(false);
  const [selectedValueCondition, setSelectedValueCondition] =
    useState<string>('');
  const [selectedValueCategory, setSelectedValueCategory] =
    useState<string>('');

  const [nameProduct, setNameProduct] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [price, setPrice] = useState<string>('');

  // Adicionando um estado para controlar se o botão deve estar habilitado
  const [isSubmitEnabled, setIsSubmitEnabled] = useState(false);

  // Alterado para armazenar várias imagens
  const [imageUris, setImageUris] = useState<string[]>([]); // Armazenar as URIs das imagens
  const [imageData, setImageData] = useState<unknown[]>([]); // Armazenar os dados das imagens

  useEffect(() => {
    console.log('Image URIs:', imageUris);
  }, [imageUris]);

  useEffect(() => {
    // Verifica se todos os campos obrigatórios estão preenchidos
    if (
      nameProduct &&
      description &&
      price &&
      selectedValueCondition &&
      selectedValueCategory &&
      imageUris.length > 0
    ) {
      setIsSubmitEnabled(true); // Habilita o botão
    } else {
      setIsSubmitEnabled(false); // Desabilita o botão
    }
  }, [
    nameProduct,
    description,
    price,
    selectedValueCondition,
    selectedValueCategory,
    imageUris,
  ]);

  const toggleConditionExpanded = useCallback(
    () => setConditionExpanded(!conditionExpanded),
    [conditionExpanded],
  );
  const toggleCategoryExpanded = useCallback(
    () => setCategoryExpanded(!categoryExpanded),
    [categoryExpanded],
  );

  const handleConditionSelect = (item: {value: string; label: string}) => {
    setSelectedValueCondition(item.value);
    setConditionExpanded(false);
  };

  const handleCategorySelect = (item: {value: string; label: string}) => {
    setSelectedValueCategory(item.value);
    setCategoryExpanded(false);
  };

  const selectImage = () => {
    if (imageUris.length >= 10) {
      ToastAndroid.show('Você pode adicionar no máximo 10 imagens', 2);

      return;
    }

    const options: ImageLibraryOptions = {
      mediaType: 'photo',
    };

    launchImageLibrary(options, response => {
      if (response.assets && response.assets.length > 0) {
        const selectedImage = response.assets[0];
        const uri = selectedImage.uri;
        if (uri) {
          // Verifica se uri não é undefined
          setImageUris(prevUris => [...prevUris, uri]);
          setImageData(prevData => [
            ...prevData,
            {
              uri,
              name: selectedImage.fileName,
              type: selectedImage.type,
            },
          ]);
        }
      }
    });
  };

  const removeImage = (index: number) => {
    const updatedUris = [...imageUris];
    const updatedData = [...imageData];

    updatedUris.splice(index, 1); // Remove a URI da imagem
    updatedData.splice(index, 1); // Remove os dados da imagem

    setImageUris(updatedUris);
    setImageData(updatedData);
  };

  const handleFormSubmit = async () => {
    try {
      const userId = auth().currentUser;
      const username = auth().currentUser?.displayName;
      if (!userId) {
        throw new Error('Usuário não autenticado');
      }

      const uid = userId.uid;
      const user = username;

      const formData = new FormData();
      formData.append('nameProduct', nameProduct);
      formData.append('description', description);
      formData.append('price', price);
      formData.append('idUser', uid);
      formData.append('username', user);

      // Adiciona várias imagens ao formulário
      imageData.forEach((image, index) => {
        formData.append(`image_${index}`, {
          uri: image.uri,
          name: image.name,
          type: image.type,
        });
      });

      const response = await fetch('http://192.168.0.107:8080/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Erro ao cadastrar produto');
      }

      const data = await response.json();
      ToastAndroid.show('Produto cadastrado', 2);
      console.info('Produto cadastrado', data);
    } catch (error) {
      ToastAndroid.show('Erro ao cadastrar produto', 2);
      console.error('Erro ao cadastrar produto:', error);
    }
  };

  const handleInputChange = (text: string) => {
    const numericValue = text.replace(/[^0-9]/g, '.');
    setPrice(numericValue);
  };

  return (
    <AnnounceSafeAreaView>
      <ScrollView>
        <KeyboardAvoidingView>
          <FormField>
            <FormInput>
              <TextInput
                placeholder="Título"
                onChangeText={setNameProduct}
                value={nameProduct}
              />
            </FormInput>
            <FormInput>
              <TextInput
                placeholder="Descrição"
                onChangeText={setDescription}
                value={description}
              />
            </FormInput>
            <FormInput>
              <TextInput
                keyboardType="numeric"
                value={price}
                placeholder="Valor"
                onChangeText={handleInputChange}
              />
            </FormInput>
            <View>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={toggleConditionExpanded}>
                <DropDownText>
                  <Text>
                    {selectedValueCondition ||
                      'Selecione o estado do seu smartphone'}
                  </Text>
                  <DropDownIcon>
                    <AntDesign
                      name={conditionExpanded ? 'caretup' : 'caretdown'}
                    />
                  </DropDownIcon>
                </DropDownText>
              </TouchableOpacity>
              {conditionExpanded && (
                <Modal
                  visible={conditionExpanded}
                  transparent={true}
                  animationType="fade">
                  <TouchableOpacity
                    activeOpacity={1}
                    onPress={() => setConditionExpanded(false)}>
                    <DropDownOptions>
                      <FlatList
                        keyExtractor={item => item.value}
                        data={[
                          {value: 'Novo', label: 'new'},
                          {value: 'Usado', label: 'old'},
                        ]}
                        renderItem={({item}) => (
                          <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={() => handleConditionSelect(item)}
                            style={{marginBottom: 8, marginTop: 8}}>
                            <Text>{item.value}</Text>
                          </TouchableOpacity>
                        )}
                      />
                    </DropDownOptions>
                  </TouchableOpacity>
                </Modal>
              )}
            </View>
            <View>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={toggleCategoryExpanded}>
                <DropDownTextCondition>
                  <Text>{selectedValueCategory || 'Categoria'}</Text>
                  <DropDownIcon>
                    <AntDesign
                      name={categoryExpanded ? 'caretup' : 'caretdown'}
                    />
                  </DropDownIcon>
                </DropDownTextCondition>
              </TouchableOpacity>
              {categoryExpanded && (
                <Modal
                  visible={categoryExpanded}
                  transparent={true}
                  animationType="fade">
                  <TouchableOpacity
                    activeOpacity={1}
                    onPress={() => setCategoryExpanded(false)}>
                    <DropDownConditionOptions>
                      <FlatList
                        keyExtractor={item => item.value}
                        data={[
                          {value: 'Telefone', label: 'Smartphone'},
                          {value: 'Tv', label: 'Tv'},
                        ]}
                        renderItem={({item}) => (
                          <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={() => handleCategorySelect(item)}
                            style={{marginBottom: 8, marginTop: 8}}>
                            <Text>{item.value}</Text>
                          </TouchableOpacity>
                        )}
                      />
                    </DropDownConditionOptions>
                  </TouchableOpacity>
                </Modal>
              )}
            </View>
            <Container>
              <ImageContainer>
                {imageUris.map((uri, index) => (
                  <ImageWrapper key={index}>
                    <StyledImage source={{uri}} />
                    <Remove onPress={() => removeImage(index)}>
                      <EvilIcons name="trash" size={40} color="white" />
                    </Remove>
                  </ImageWrapper>
                ))}
              </ImageContainer>
              <ButtonImages onPress={selectImage}>
                <ButtonText>Selecionar Imagem</ButtonText>
              </ButtonImages>
            </Container>
          </FormField>
          <ButtonSubmit
            disabled={!isSubmitEnabled} // Desabilita o botão se os campos não estiverem completos
            onPress={handleFormSubmit}>
            <ButtonText>Publicar</ButtonText>
          </ButtonSubmit>
        </KeyboardAvoidingView>
      </ScrollView>
    </AnnounceSafeAreaView>
  );
}
