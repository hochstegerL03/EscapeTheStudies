<template>
  <div>
    <!--Menu-->
    <div class="fixed-bottom-right ets-absolute-top">
      <div
        @click="scrolltovertically('text')"
        v-if="showmenu"
        class="ets-bubble-menu ets-title text-h3 q-my-md q-mx-lg text-white text-center"
      >
        <div class="flex items-center justify-center ets-h-100 ets-w-100 ets-fake-button">t</div>
      </div>
      <div
        @click="scrolltovertically('lection')"
        v-if="showmenu"
        class="ets-bubble-menu ets-title text-h3 q-my-md q-mx-lg text-white text-center"
      >
        <div class="flex items-center justify-center ets-h-100 ets-w-100 ets-fake-button">l</div>
      </div>
      <div
        @click="scrolltovertically('questions')"
        v-if="showmenu"
        class="ets-bubble-menu ets-title text-h3 q-my-md q-mx-lg text-white text-center"
      >
        <div class="flex items-start justify-center ets-h-100 ets-w-100 ets-fake-button">q</div>
      </div>
      <div
        @click="showmenu = !showmenu"
        class="ets-bubble-menu ets-title text-h3 q-my-md q-mx-lg text-white text-center"
      >
        <div class="flex items-center justify-center ets-h-100 ets-w-100">i</div>
      </div>
    </div>
    <!--Menu End-->
    <div id="text" class="flex justify-center">
      <div class="ets-w-80" v-html="story" v-if="story"></div>
    </div>
    <div id="text" class="flex justify-center">
      <div class="ets-w-80" v-html="lecture" v-if="lecture"></div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.ets-absolute-top {
  z-index: 999;
}
.ets-bubble-menu {
  background-color: $secondary;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
}
</style>
<script setup>
import { scroll } from 'quasar';
import { ref, onMounted } from 'vue';
import { useTextData } from '../../stores/textdata.js';

const textStore = useTextData();
let lecture = ref();
let story = ref();

onMounted(async () => {
  await textStore.getStory1();
  await textStore.getLection1();
  console.log(textStore.chapter1Lection[0].code);
  lecture.value = textStore.chapter1Lection[0].code;
  story.value = textStore.chapter1Story[0].code;
});

const questions = ref([
  {
    id: 1,
    type: 'multipleChoice',
    description:
      'Lass uns damit mal mit ein paar einfachen und allgemeinen Fragen starten! Achtung, nicht alle Fragen sind in der derzeitigen Lektion erklärt!',
    question:
      'Welche drei “Programmiersprachen” werden für eine moderne/zeitgemäße Website benötigt?',
    answers: ['JavaScript, HTML, CSS.', 'JavaScript, Vue, C#.', 'HTML ,CSS, Python.'],
    showedAnswer: '',
    correctAnswer: 'JavaScript, HTML, CSS.', //hier gehört ein Regex hin
  },
  {
    id: 2,
    type: 'multipleChoice',
    description: '',
    question: 'Welchen Fehler hatte die erste Frage?',
    answers: [
      'CSS & HTML sind eigentlich Beschreibungssprachen.',
      'JavaScript ist eigentlich eine Beschreibungssprache.',
      'Es gab keinen Fehler: Trick-Question!',
    ],
    showedAnswer: '',
    correctAnswer: 'CSS & HTML sind eigentlich Beschreibungssprachen.', //hier gehört ein Regex hin
  },
  {
    id: 3,
    type: 'textInput',
    description: '',
    question:
      'Deklariere drei Variablen: Die Konstante “change” mit dem Wert “Life always Changes”, die globale Variable “climateChange” mit dem booleschen Wert, “true”, und die lokale Variable “you” ohne Wertangabe:',
    showedAnswer: '',
    correctAnswer: 'const change = “Life always Changes”; var climateChange = true; let you;', //hier gehört ein Regex hin
  },
  {
    id: 4,
    type: 'multipleChoice',
    description: '',
    question: 'Wie werden Datentypen in Vanilla JavaScript impliziert?',
    answers: [
      'Dynamisch: Der Datentyp wird mit dem angegebenen Wert definiert.',
      'Statisch: Der Datentyp muss beim Anlegen der Variable angegeben werden.',
    ],
    showedAnswer: '',
    correctAnswer: 'Dynamisch: Der Datentyp wird mit dem angegebenen Wert definiert.', //hier gehört ein Regex hin
  },
  {
    id: 5,
    type: 'multipleChoice',
    description: '',
    question: 'Mit welchen dieser Tags kann kein Text in HTML angezeigt werden?',
    answers: ['p', 'h1', 'h6', 'div', 'br'],
    showedAnswer: '',
    correctAnswer: 'br', //hier gehört ein Regex hin
  },
  {
    id: 6,
    type: 'multipleChoice',
    description: '',
    question: 'Wie reagiert HTML auf folgenden Code? <h187>Werde ich angezeigt?</h187>',
    answers: [
      'Es wird ein Fehler auf der Konsole ausgeworfen und der Text ignoriert.',
      'Der Text wird trotz falschem Tag angezeigt, jedoch mit den Font Values vom parent-Object.',
      'Die Webseite kann wegen dem Fehler nicht laden.',
    ],
    showedAnswer: '',
    correctAnswer:
      'Der Text wird trotz falschem Tag angezeigt, jedoch mit den Font Values vom parent-Object.', //hier gehört ein Regex hin
  },
  {
    id: 7,
    type: 'multipleChoice',
    description: '',
    question: 'Welcher Output wird bei folgender Addition gegeben: console.log(“16” + 16);',
    answers: ['1616', '32', 'N.a.N'],
    showedAnswer: '',
    correctAnswer: '1616', //hier gehört ein Regex hin
  },
  {
    id: 8,
    type: 'buildAnswer',
    description: '',
    question:
      'Konstruiere eine einfache Funktion namens “double” in Javascript mit folgenden Parameter, “number”, welcher den Eingabeparameter mit sich selbst multipliziert und zurückgibt:',
    answers: [
      'function',
      '(number).',
      'double',
      '{',
      '}',
      'const',
      'return',
      'number * number;',
      'square(number);',
      '(double)',
      'number',
    ],
    showedAnswer: [],
    correctAnswer: 'function double (number) { return number * number; }', //hier gehört ein Regex hin
  },
  {
    id: 9,
    type: 'multipleChoice',
    description: '',
    question: 'Welcher der folgenden CSS Attribute ändert die Farbe der Schrift zu rot?',
    answers: [
      'background-color: red;',
      'color: rot;',
      'font-color: red;',
      'color: red;',
      'font-color: #ff0000;',
      'display-color: red;',
    ],
    showedAnswer: '',
    correctAnswer: 'color: red;', //hier gehört ein Regex hin
  },
  {
    id: 10,
    type: 'multipleChoice',
    description: '',
    question: 'Welche Version von HTML ist derzeit in Benutzung?',
    answers: ['HTML3.5', 'HTML5', 'HTML9', 'HTML4'],
    showedAnswer: '',
    correctAnswer: 'HTML5', //hier gehört ein Regex hin
  },
]);

function changeAnswer(answer, id) {
  questions.value[questions.value.findIndex((el) => el.id == id)].showedAnswer = answer;
}

const question1 = ref();
const question2 = ref();
const question3 = ref();
const question4 = ref();
const question5 = ref();
const question6 = ref();
const question7 = ref();
const question8 = ref([]);
const question9 = ref();
const question10 = ref();

const re = RegExp(
  /^\s*(let|var|const)*(?<name> change| yo|Life always Changes| climateChange|true).+\;/gm,
);

const rightQ = ref([]);
const falseQ = ref([]);

const showmenu = ref(false);
const hint1 = ref(false);

const { getScrollTarget, setVerticalScrollPosition } = scroll;

function scrolltovertically(obj) {
  const el = document.getElementById(obj);
  const target = getScrollTarget();
  const offset = el.offsetTop - 50;
  const duration = 1000;
  setVerticalScrollPosition(target, offset, duration);
}

const trySub = () => {
  while (falseQ.value.length > 0) {
    falseQ.value.pop();
  }
  while (rightQ.value.length > 0) {
    rightQ.value.pop();
  }
  if (question1.value == 'JavaScript, HTML, CSS.') {
    rightQ.value.push(question1.value);
  } else {
    falseQ.value.push(question1.value);
  }
  if (question2.value == 'CSS & HTML sind eigentlich Beschreibungssprachen.') {
    rightQ.value.push(question2.value);
  } else {
    falseQ.value.push(question2.value);
  }
  if (re.exec(question3.value) !== null) {
    rightQ.value.push(question3.value);
  } else {
    falseQ.value.push(question3.value);
  }
  if (question4.value == 'Dynamisch: Der Datentyp wird mit dem angegebenen Wert definiert.') {
    rightQ.value.push(question4.value);
  } else {
    falseQ.value.push(question4.value);
  }
  if (question5.value == 'br') {
    rightQ.value.push(question5.value);
  } else {
    falseQ.value.push(question5.value);
  }
  if (
    question6.value ==
    'Der Text wird trotz falschem Tag angezeigt, jedoch mit den Font Values vom parent-Object.'
  ) {
    rightQ.value.push(question6.value);
  } else {
    falseQ.value.push(question6.value);
  }
  if (question7.value == '1616') {
    rightQ.value.push(question7.value);
  } else {
    falseQ.value.push(question7.value);
  }
  if (question8.value.toString() == 'function,double,(number),{,return,number * number;,}') {
    rightQ.value.push(question8.value.toString());
  } else {
    // let text = question8.value.toString();
    // console.log(text);
    falseQ.value.push(question8.value.toString());
  }
  if (question9.value == 'color: red;') {
    rightQ.value.push(question9.value);
  } else {
    falseQ.value.push(question9.value);
  }
  if (question10.value == 'HTML5') {
    rightQ.value.push(question10.value);
  } else {
    falseQ.value.push(question10.value);
  }
  if (rightQ.value.length > 9) {
    return alert('Congratulation you got 0 Errors! Great Job!');
  }
};
</script>
