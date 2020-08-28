// Informações Principais
let info = {
   personagem: "Margarida",
   origem: "Pato Donald",
   nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
   recorrente: "Sim"
};

// Dar boas vindas ao personagem
function returnWelcome(character){
   return `Bem-vinda, ${character['personagem']}`;
};

// Mostra todos as chaves do objeto
function showKeys(keys){
   let allKeys = "";
   for(let key in keys){
      allKeys += key + "\n";
   }
   allKeys = allKeys.trim();
   return allKeys;
}

// Mostrar os conteudos das chaves
function showContent (contents){
   let allContents = "";
   for(let content in contents){
      allContents += contents[`${content}`] + "\n";
   }
   allContents = allContents.trim();
   return allContents;
}

// Novo objeto
let secondInfo = {
   personagem: "Margarida e Tio Patinhas",
   origem: "Pato Donald e Christmas on Bear Mountain, Dell's Four Color Comics #178",
   nota: "Namorada do personagem principal nos quadrinhos do Pato Donald e O último MacPatinhas",
   recorrente: "Sim"
};

console.log(showContent(secondInfo))