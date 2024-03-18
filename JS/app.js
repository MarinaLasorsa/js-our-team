
/*ESERCIZIO:
creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni:
- nome
- ruolo
- foto

Wayne Barnett	Founder & CEO	        wayne-barnett-founder-ceo.jpg
Angela Caroll	Chief Editor	        angela-caroll-chief-editor.jpg
Walter Gordon	Office Manager	        walter-gordon-office-manager.jpg
Angela Lopez	Social Media Manager	angela-lopez-social-media-manager.jpg
Scott Estrada	Developer	            scott-estrada-developer.jpg
Barbara Ramos	Graphic Designer	    barbara-ramos-graphic-designer.jpg */

const team = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        photo: 'wayne-barnett-founder-ceo.jpg'
    },
    {
        name: "Angela Caroll",
        role: "Chief Editor",
        photo: "angela-caroll-chief-editor.jpg"
    },
    {
        name: "Walter Gordon",
        role: "Office Manager",
        photo: "walter-gordon-office-manager.jpg"
    },
    {
        name: "Angela Lopez",
        role: "Social Media Manager",
        photo: "angela-lopez-social-media-manager.jpg"
    },
    {
        name: "Scott Estrada",
        role: "Developer",
        photo: "scott-estrada-developer.jpg"
    },
    {
        name: "Barbara Ramos",
        role: "Graphic Designer",
        photo: "barbara-ramos-graphic-designer.jpg"
    }
]

//console.log(team);

/*ESERCIZIO:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto.*/

for (let i = 0; i < team.length; i++) {
    const currentMember = team[i];
    //console.log(currentMember);
    const memberInfo = `
    Nome: ${currentMember.name},
    Ruolo: ${currentMember.role}, 
    Foto: ${currentMember.photo}`;
    console.log(memberInfo);
}
