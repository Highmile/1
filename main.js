var age = prompt("Yoshingizni Kiriting!")
age = Number(age)

if (age <= 18) {
    alert("Yoshsiz O'qishingiz kerak")
}else if (age <= 50) {
    alert("Ishlashingiz  kerak!")
}else if (age <= 59) {
    alert("Yaqinda pensiyaga chiqasiz!")
}else if (age <= 150) {
    alert("Pensionerga o'xshaysiz, hali tirik bo'lsaniz :)")
}

else{
    alert("Nimadir notog'ri ketib qoldi")
}