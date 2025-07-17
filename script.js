let heroName = "";
let heroXpInput = "";
let heroXp = 0;
let level = "";
let result = "";

while (isNaN(heroXp) || heroXp < 0) {
    result = "Por favor, insira uma quantidade de XP válida (número não negativo).";
    break;
}

if (heroName === "") {
    heroName = "Desconhecido";
}

if (heroXp < 1000) {
    level = "Ferro";
} else if (heroXp >= 1001 && heroXp <= 2000) {
    level = "Bronze";
} else if (heroXp >= 2001 && heroXp <= 5000) {
    level = "Prata";
} else if (heroXp >= 5001 && heroXp <= 7000) {
    level = "Ouro";
} else if (heroXp >= 7001 && heroXp <= 8000) {
    level = "Platina";
} else if (heroXp >= 8001 && heroXp <= 9000) {
    level = "Ascendente";
} else if (heroXp >= 9001 && heroXp <= 10000) {
    level = "Imortal";
} else {
    level = "Radiante";
}

result = "O Herói de nome " + heroName + " está no nível de " + level;
document.write(result);
