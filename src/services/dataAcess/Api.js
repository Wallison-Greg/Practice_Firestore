import { db } from "../../firebaseConfig";
import { 
        collection, 
        addDoc, 
        doc, 
        setDoc, 
        updateDoc, 
        getDocs, 
        getDoc,
        onSnapshot,
        query, 
        where,
        deleteDoc
    } from "firebase/firestore"; 

/*
metodo "addDoc": com esse metodo podemos adicionar dados no firestore, ele e bastante similar ao metodo "setDoc" ou seja ambos servem para adicionar dados na firestore o diferencial e que com "setDoc" podemos sobreescrever o dado adicionado caso ele ja esteja inserido na firestore  

para utilizarmos o metodo "addDoc" precisamos definir como parametro o metodo 'collection' passando para dentro dele o 'db' e o "nome da coleção" apos isso passamo um objeto que ira conter os campos da colleção e os seus valores assim como esta sendo feito no exemplo a baixo 
*/

//metodo addDoc
const addUser = async () => {
    const response = await addDoc(collection(db, "users"), {
        name: "wallison",
        idade: 23
    });
    return response;
}

/*
metodo 'setDoc': esse metodo e similar ao metodo "addDoc" tendo como objetivo adicionar dados na firestore, o seu diferencial e que com ele podemos sobreescrever dados ja adicionado 

para utilizarmos o metodo 'setDoc' precisamos definir como parametro o metodo 'doc' passando para dentro dele o 'db' o 'nome da coleção' e o 'id do documento' esse 'id_doc' basicamente e o id do documento que sera alterado e o objeto com os valores que serão alterados
*/

//metodo setDoc
const setUser = async() => {
    const response = await setDoc(doc(db, "users", "TOZ2mYhHSPv4U4C8q74h"), {
        name: "wallison gregorio",
    });
    return response;
}

/*
metod 'updateDoc' : utilizamos o metodo 'updateDoc' para atualizar os dados de um documento sem substituir o documento inteiro, esse metodo e similar ao metodo 'setDoc' porem o setDoc sobreescreve os dados do documento por inteiro ja o updateDoc so atualiza o dado necessario

para utilizarmos o metodo 'updateDoc' e necessario definir como parametro o metodo "doc" passando o 'db' a referencia do documento e o id do elemento a ser alterado, apos isso basta definirmos os dados a serem atualizados dentro de um objeto assim como esta sendo feito no exemplo a baixo
*/

const updateUser = async () => {
    const response = await updateDoc(doc(db, 'users', 'mv2RBfcJwBk8CpcCYy2g'), {
        idade: 22
    });

    return response;
}

/*
metodo 'getDoc' | 'getDocs': utilizamos esse metodo para buscar dados dos documentos da firestore ou seja com ele podemos pegar os dados inserido dentro do banco de dados 

para utilizar o metodo 'getDoc' e necessario passar para ele como parametro a refencia do documento que sera buscado ou seja precisamos definir o metodo 'collection' em casos de trazer todos os documentos da coleção ou usar o metodo 'doc' caso seja necessario trazer um unico elemento dentro da coleção 

obs: para buscar varios dados de uma coleção e necessario utiliar o metodo "getDocs" pois com ele podemos pegar varios dados de uma so vez ja o metodo 'getDoc' pega somente um dado da coleção 
*/

const getUsers =  async () => {
    const docRef = collection(db, 'users');

    const response = await getDocs(docRef);

    return response;
}

const getUser =  async () => {
    const docRef = collection(db, 'users');

    const response = await getDoc(doc(docRef, 'mv2RBfcJwBk8CpcCYy2g'));

    return response;
}


/* 
metodo 'onSnapshot' : basicamente esse metodo e similar ao metodo 'getDoc / getDocs' ou seja ele busca os dados inseridos dentro da firestore, o seu diferencia e que podemos estar pegando os dados inseridos dentro da firestore em tempo real ou seja assim que for atualizado os dados ou inserido novos dados a função 'onSnapshot' ira trazer essa atualização 

para utilizarmos essa função e necessario passarmos como parametro a 'referencia do documento' e uma 'callback' que tera como objetivo setar os dados atualizados
*/

const onSnapshotUser = (callback) => {
    const docRef = collection(db, 'users');

    const snapUser = onSnapshot(docRef, (snapshot) => {
        const users = [];

        snapshot.forEach((doc) => {
            users.push(doc.data())
        })

        callback(users);
    })
}

/* 
metodo 'query' | 'where' :  Basicamente utilizamos esses metodo para fazer uma busca dos dados mais detalhada ou seja com o metodo 'query' realiza a busca dos dados desejado ja o metodo 'where' e responsavel por realizar a filtragem dos dados a serem buscado 

O método 'where' usa três parâmetros: um campo para filtrar, um operador de comparação e um valor
ja o metodo 'query' recebe dois parametros: 'referencia do documento' e o metodo 'where'

obs: utilizamos esse metodos apenas para filtrar dados da coleção, caso deseja pegar esses dados e mostrar pro usuario e necessario utilizar o metodo 'getDoc | getDocs' ou o metodo 'onSnapshot' que ira ler os valores filtrados 
*/

const filterUser = (callback, filter) => {
    const docRef = collection(db, "users");

    const q = query(docRef, where("name", "==", filter));

    const querySnapshot = onSnapshot(q, (snapshot) => {
        const users = [];

        snapshot.forEach((doc) => {
            users.push(doc.data())
        })

        callback(users);
    })
}

/* 
metodo 'deleteDoc': utilizamos esse metodo para excluir um documento da firestore

para utilizarmos esse metodo e necessario passar como parametro o metodo 'doc' pois com ele podemos definir a coleção e o id do campo que sera deletado 
*/

const deleteUser = async () => {

    await deleteDoc(doc(db, "users", "TOZ2mYhHSPv4U4C8q74h"));
}

export {addUser, setUser, updateUser, getUsers, getUser, onSnapshotUser, filterUser, deleteUser}