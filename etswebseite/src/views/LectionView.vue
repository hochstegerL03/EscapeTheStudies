<template>
  <div>
    <!--Menu-->
    <div class="fixed-bottom-right absolutetop">
      <div
        @click="scrolltovertically('text')"
        v-if="showmenu"
        class="menustatic titelold text-h3 q-my-md q-mx-lg text-white text-center"
      >
        <div class="flex items-center justify-center ets-h-100 w-100 fakebutton">t</div>
      </div>
      <div
        @click="scrolltovertically('lection')"
        v-if="showmenu"
        class="menustatic titelold text-h3 q-my-md q-mx-lg text-white text-center"
      >
        <div class="flex items-center justify-center ets-h-100 w-100 fakebutton">l</div>
      </div>
      <div
        @click="scrolltovertically('questions')"
        v-if="showmenu"
        class="menustatic titelold text-h3 q-my-md q-mx-lg text-white text-center"
      >
        <div class="flex items-start justify-center ets-h-100 w-100 fakebutton">q</div>
      </div>
      <div
        @click="showmenu = !showmenu"
        class="menustatic titelold text-h3 q-my-md q-mx-lg text-white text-center"
      >
        <div class="flex items-center justify-center ets-h-100 w-100">i</div>
      </div>
    </div>
    <!--Menu End-->
    <!--Part 1: Story-->

    <div id="text" class="flex justify-center">
      <!--Body/Text-->

      <div class="w-80">
        <!--Header-->
        <div class="text text-h4 text-weight-regular q-my-md">ER</div>
        <!--Header End-->
        <!--Section 1-->
        <div>
          <div class="text text-h6 text-weight-regular q-my-md">
            And with this your awfully self-moving, strange body finishes its morning routine. Your
            teeth brushed, your hair combed and this stinging pain in your throat stopped.
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            What was this weird feeling in your stomach only? Hunger? Who knows. You can’t continue
            your weak string of thoughts before the body once more moves.
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            Moving to another room. To another setting. A setting without a hard wooden floor,
            without a depressing humidity in the air. A setting without this mysterious feeling of
            pain and broken glass.
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            Even though you don’t understand why, your body feels collected again. Once you leave
            the bathroom, you feel like your shattered past has been trapped behind that closed
            door. You feel like the music in your head could bring you joy again and you realize
            that nothing will end like you believed it would.
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            And with those emotions your downfall began.
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">...</div>
          <div class="text text-h6 text-weight-regular q-my-md">
            “Wait, why is the door closed? And where is the key? God dammit. Let me get out of this
            rat hole!”.
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            His screams were futile. No one would ever let him leave again. This broken down room
            would be his death. Don’t believe me? Just look and despair yourself!
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">Welcome to the ER, Sam!</div>

          <hr class="q-my-lg" />
        </div>
        <!--Section 1 End-->
      </div>
      <!--Body/Text End-->
    </div>
    <!--Part 1: Story End-->
    <!--Part 2: Notes-->
    <div id="lection" class="flex justify-center">
      <!--Body/Text-->
      <div class="w-80">
        <!--Header-->
        <div class="text text-h4 text-weight-regular q-mt-lg">Was ist JavaScript</div>
        <figcaption class="text-weight-light text-italic q-mt-xs q-mb-lg">
          - The Mastermind
        </figcaption>
        <!--Header End-->
        <!--Section 1-->
        <div>
          <div class="text text-h6 text-weight-regular q-my-md">
            HTML gibt zwar die Struktur an und CSS lässt uns das ganze recht schön gestalten, jedoch
            ist nicht immer alles so schön statisch und einfältig, wie wir es der Einfachheitshalber
            gerne hätten.
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            Und genau deshalb brauchen wir JavaScript. JavaScript ist - jetzt aber auch mal wirklich
            - die erste Programmiersprache, welche wir aktiv nutzen werden.
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            Aber was kann JavaScript? JavaScript kann so einiges. Der beliebteste Use-Case wäre
            dabei das Event-Handling.
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            Bis jetzt konnten wir zwar schon Buttons und andere schöne “interaktive” Elemente
            gestalten, jedoch sind diese ohne JavaScript, wie sagt man das am Besten, etwas weniger
            interaktiv und ziemlich nutzlos.
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            Beginnen wir jedoch erstmal wieder mit den Basics.
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            Statt dem Dateikürzel .css oder .html nutzen wir nun .js, passend stehend zu JavaScript.
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            Ähnlich wie bei unserer CSS Datei, müssen wir kein spezielles Grundgerüst anlegen und
            können stattdessen direkt drauf los arbeiten.
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            Aber bevor wir beginnen, uns kreativ auszuleben, sollten wir zuerst ein paar wichtige
            Grundlagen in der Theorie besprechen.
          </div>
          <div class="text text-h6 text-weight-bold q-my-md">Variablen:</div>

          <div class="text text-h6 text-weight-regular q-my-md">
            Bis jetzt haben wir Daten oder Elemente, wie Wörter, Sätze, stets direkt genutzt, ohne
            diese einer Variable zuzuweisen.?
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            Naja, nicht ganz, denn die Nutzung von Tags oder CSS-Klassen kommt von der
            Funktionalität recht nahe heran.
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            Variablen sind ganz einfach gesagt, eine Methode, um Werte oder Funktionen einem
            Stichwort, dem Namen der Variable, zuzuweisen.
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            Dadurch können Funktionen oder Werte öfters genutzt und schnell und einfach nachträglich
            geändert werden, obwohl das auch nicht immer ganz der Wahrheit entspricht.
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            Um es aber etwas einfacher hier zu halten, stellen wir nur kurz die 3 Arten von
            Variablen vor und unterscheiden zwischen Deklaration und Zuweisung von Werten.
          </div>
          <div class="text text-h6 text-weight-bold q-my-md">Let:</div>
          <div class="w-100 flex justify-center">
            <img src="lections/javascript/JavaScript_var_let_1.svg" class="q-my-lg image" />
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            Let ist der moderne Bruder oder die moderne Schwester von Var. Keine Sorge, zu dieser
            Art der Deklaration kommen wir noch!
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            Let gibt uns die Möglichkeit, die Variable jederzeit zu ändern und auf einen gewünschten
            Scope zu beschränken.
          </div>
          <div class="text text-italic text-h6 text-weight-light q-my-md">
            Achtung: Der Scope wird dadurch bestimmt, wo wir die Variable anlegen!
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            Wir können solch eine Variable auch ganz einfach deklarieren:
            <span class="text-italic text-weight-light">let newVariable = gewünschterWert;</span>
            oder auch <span class="text-italic text-weight-light">let newVariable;</span>
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            Für was <span class="text-italic text-weight-light">newVariable</span> und
            <span class="text-italic text-weight-light">gewünschterWert</span> wohl stehen, muss ich
            kaum erklären. Jedoch eine Notiz zur Syntax ganz schnell:
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            <span class="text-italic text-weight-light">newVariable</span> ist ein Wort, welches als
            Name der Variable genutzt werden soll. Nicht alle UTF-8 Zeichen können hierfür genutzt
            werden, aber solange man sich an das Alphabet (ohne Sonderzeichen) hält, ist man hier
            immer an der sicheren Seite.
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            <span class="text-italic text-weight-light">gewünschterWert</span> ist der zugewiesene
            Wert der Variable, wessen Datentyp dynamisch von JavaScript bestimmt wird.
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            Simpel gesagt, es gibt verschiedene Arten, wie das System Wörter oder Zeichen behandelt.
            Darunter fallen:
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            <b>String</b>, eine Zeichenfolge, wie Sätze und Wörter, welche innerhalb von
            <span class="text-italic text-weight-light">“”</span>,
            <span class="text-italic text-weight-light">‘’</span> oder
            <span class="text-italic text-weight-light">``</span> in der Deklaration angegeben
            werden müssen, Beispiel:
            <span class="text-italic text-weight-light">let string = “gewünschterWert”;</span>
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            <b>Zahlen</b> (Integer oder Number / Numeric), hierbei ist eine Erklärung wahrscheinlich
            überflüssig, darum direkt zu den Beispielen:
            <span class="text-italic text-weight-light">let integer = 8;</span> oder
            <span class="text-italic text-weight-light">let number = 8.76;</span>
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            <b>Boolean</b>, einfach gesagt “Richtig” oder “Falsch”, also zwei States, ähnlich wie
            bei der Binomialverteilung (YaY Mathe, we love it). Da wir aber im Englischen hier sind,
            heißt es <span class="text-italic text-weight-light">true</span> oder
            <span class="text-italic text-weight-light">false</span> (keine Anführungszeichen, da
            wir ja keinen String sondern einen Boolean übergeben wollen). Statt true oder false
            können auch
            <a href="https://developer.mozilla.org/en-US/docs/Glossary/Truthy?retiredLocale=de"
              >Truthy</a
            >
            oder
            <a href="https://developer.mozilla.org/en-US/docs/Glossary/Falsy?retiredLocale=de"
              >Falsy</a
            >
            Values genutzt werden.
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            Beispiele für Falsy Values, also Werte welche bei Bedingungen oder Umwandlung in
            boolesche Werte als <span class="text-italic text-weight-light">false</span> gesehen
            werden, wären: 0, -0, 0n, null, undefined, NaN oder “”, also ein leerer String.
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            Nun, es gibt jetzt auch noch die Datentypen
            <span class="text-italic text-weight-light">undefined</span>,
            <span class="text-italic text-weight-light">null</span>,
            <span class="text-italic text-weight-light">NaN</span> oder der Fall, in welchem wir
            einer Variable den Wert einer anderen oder einer vordefinierten Funktion, wie Variable
            übergeben, aber der Einfachheitshalber, behandeln wir diese hier erstmals weniger und
            sehr ungenau.
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            Das einzige was zu wissen ist, ist das
            <span class="text-italic text-weight-light">null</span> und
            <span class="text-italic text-weight-light">undefined</span> beide dafür stehen, dass
            die Variable “leer” also undefiniert ist und
            <span class="text-italic text-weight-light">null</span> meistens gewünscht ist und
            <span class="text-italic text-weight-light">undefined</span> eher unabsichtlich oder
            automatisch (wie im Fall dieser Deklaration:
            <span class="text-italic text-weight-light">let var;</span> Es wurde kein Wert
            angegeben, also ist es automatisch nach JavaScript
            <span class="text-italic text-weight-light">undefined</span>).
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            Bei der Übergabe von bereits existierenden Funktionen oder Variablen, werden diese
            einfach nach dem = geschrieben:
            <span class="text-italic text-weight-light">let newVar = valueOfOldVar;</span>
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            Puh, jetzt haben wir ja glatt alle Datentypen am Beispiel eines Let bearbeitet, aber was
            machen die anderen 2 Arten von Variablen dann noch?
          </div>
          <hr />
          <div class="text text-h6 text-weight-bold q-my-md">Const:</div>
          <div class="w-100 flex justify-center">
            <img src="lections/javascript/JavaScript_var_const_1.svg" class="q-my-lg image" />
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            Const steht für eine Konstante. Wow, wer hätte das nur erraten können. Und wie ist Const
            jetzt anders zu Let?
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            Naja, als erstes ist Const konstant, heißt einmal deklariert, kann der Wert nicht weiter
            geändert werden. Alles andere bleibt aber ansonsten eigentlich gleich.
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            Heißt, um es kurz zu fassen:
            <span class="text-italic text-weight-light">const ant = gewünschterWert;</span> ist
            gültig, jedoch <span class="text-italic text-weight-light">const ant;</span> nicht!
          </div>
          <hr />
          <div class="text text-h6 text-weight-bold q-my-md">Var:</div>
          <div class="w-100 flex justify-center">
            <img src="lections/javascript/JavaScript_var_var_1.svg" class="q-my-lg image" />
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            Und was kann Var jetzt eigentlich noch anderes? Naja, es ist auf jeden Fall man ziemlich
            alt und hält sich wie manche ältere, glatzköpfige Personen eher weniger an Grenzen, also
            Scopes.
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            Var kommt daher noch aus einer Zeit, wo Variable immer und überall gültig waren, also
            auch im Gültigkeitsbereich einer anderen, eingebundenen JavaScript Datei!
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            Var sollte daher wirklich nur in ganz speziellen Situationen genutzt werden, ansonsten
            ist ein gut platziertes Let immer besser.
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            Andere Unterschiede? Nope, das wars. Deklaration und alles andere ändern sich bis auf
            das Stichwort var anstatt von let nicht weiters.
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            Aber warte mal… Irgendwas über das Ändern von Werten oder Variablen wurde doch erwähnt,
            oder nicht? Genau! Dazu kommen wir jetzt.
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            Deklarieren war das Wort, welches bis jetzt im Kontext vom Anlegen und Zuweisen von
            Variable von mir genutzt wurde, jedoch ist eine Deklaration auch so:
            <span class="text-italic text-weight-light">let var;</span> bereits vollständig.
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            Der Wert wäre hier, außer bei einem const, also gar nicht notwendig, denn das könnte man
            nachträglich auch so:
            <span class="text-italic text-weight-light">var = 5;</span> ändern.
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            Eine Deklaration bedeutet nur, dass wir eine Variable zum ersten mal anlegen und dem
            System sagen: “Hey du, alles ab jetzt was so heißt, referenziert diesen Wert”, danach
            können wir also noch immer auf diese zugreifen und deren Wert ändern und das auch noch
            ganz einfach.
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            Alles was wir davor gemacht haben, bleibt eigentlich gleich, nur dass wir das let /
            const / var nun endlich auslassen können. Heißt, wir können das alles hier machen:
          </div>

          <div class="text text-italic text-h6 text-weight-light q-my-md">
            var = 2;<br />
            //value: 2<br />
            var = “zwei”;<br />
            //value: “zwei<br />
            var = 2 + 2;<br />
            //value: 4<br />
            var = var + 2;<br />
            //value: 6
          </div>
          <div class="w-100 flex justify-center">
            <img src="lections/javascript/JavaScript_change_var_1.svg" class="q-my-lg image" />
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            Aber wie hat das Letzte jetzt eigentlich funktioniert? Simpel gesagt, mit dem + Zeichen
            kann man auch Variablen kombinieren, also
            <span class="text-italic text-weight-light">var + var;</span> oder
            <span class="text-italic text-weight-light">var + 2;</span> wären beides gültige
            Nutzungsweisen vom + Zeichen.
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            Es gibt jetzt natürlich noch viele weitere Arten, unsere Variable zu verändern, wie ++
            oder -- (Zählen / Ziehen 1 zu / von einer Zahl (ab)). Aber wir kommen derzeit auch gut
            ohne aus.
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            Wichtig ist nur, wenn man 2 verschiedene Datentypen mit + verbindet, kann das oft und
            schnell zu Fehlern kommen, da JavaScript automatisch versucht, beide Datentypen zum
            gleichen zu konvertieren.
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            Bei <span class="text-italic text-weight-light">2 + “2”</span> ist das zum Glück noch
            einfach und JavaScript gibt uns auch zum Glück gleich 4 zurück, aber selbst hier wird es
            schnell komisch, da <span class="text-italic text-weight-light">“2” + 2</span> auf
            einmal “22” ausgibt.
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            Komisch, oder? Aber das ist zu kompliziert zu erklären. Einfach gesagt: Meistens wird
            der erste Wert bei einer + Verknüpfung als Referenz- oder Wunschwert genommen und der
            zweite diesem angepasst.
          </div>
          <hr />
          <div class="text text-h6 text-weight-bold q-my-md">Vergleichsoperatoren:</div>
          <div class="text text-h6 text-weight-regular q-my-md">
            Es ist zwar schön und gut, dass wir Werte in sogenannten Variablen speichern können,
            jedoch sollten wir auch in der Lage sein, Interaktionen logisch zu verbinden und Code,
            wie später auch Teile der Webseite, bedingt zu rendern, also anzuzeigen oder
            auszuführen.
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            Dafür brauchen wir jedoch erstmal eine Methode, um Bedingungen zu setzen und Werte zu
            vergleichen.
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            Zum Vergleichen kommen daher, mit passendem Namen, Vergleichsoperatoren ins Spiel.
            Folgende Vergleichsoperatoren können genutzt werden:
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            <b>==</b>: Die beiden Werte sind von der Bedeutung aus gleich, der Datentyp kann jedoch
            unterschiedlich sein.
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            <b>===</b>: Die beiden Werte sind identisch. Datentyp muss hier übereinstimmen!
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            <b>!=</b>: Die beiden Werte sind ungleich, also unterschiedlich. Trifft nicht zu, wenn
            nur der Datentyp unterschiedlich ist.
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            <b>!==</b>: Die beiden Werte sind ungleich, dieses Mal wird der Datentyp berücksichtigt!
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            <b>&lt;</b>: Der vorhergehende Wert ist kleiner als der Zweite.
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            <b>&lt;=</b>: Der vorhergehende Wert ist kleiner oder gleich dem Zweite.
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            <b>></b>: Der vorhergehende Wert ist größer als der Zweite.
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            <b>>=</b>: Der vorhergehende Wert ist größer oder gleich dem Zweite.
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            So. Jetzt wissen wir, welche Vergleichsoperatoren es gibt, aber wie setzen wir diese
            jetzt eigentlich ein? Ganz einfach. Vor und nach dem Operator kommt jeweils ein Wert,
            Beispiel:
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            Ganz einfach. Vor und nach dem Operator kommt jeweils ein Wert, Beispiel:
            <span class="text-italic text-weight-light">2 > 3;</span> (hier würde natürlich jetzt
            <span class="text-italic text-weight-light">false</span> herauskommen), und tada, die
            zwei Werte werden verglichen und als Boolean behandelt.
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            Aber wie können wir jetzt mehrere Bedingungen auf einmal setzen? Wie würde es denn
            ausschauen, wenn wir gerne hätten, dass Timmy größer als Sam, aber kleiner als Susanne
            wäre?
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            Dafür kommen logische Operationen jetzt ins Spiel!
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            Logische Operationen geben uns die Möglichkeit, mehrere Bedingungen oder Vergleiche zu
            einem einzigen zu verknüpfen. Es gibt 2 Operatoren, welche wir uns hier auch gleich
            anschauen werden.
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            <b>&&</b> (UND-Operator): Wenn die erste und die zweite Bedingung zustimmen, dann kommt
            true heraus.
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            <b>||</b> (ODER-Operator): Wenn einer der beiden Bedingungen true ist, wird true
            zurückgeliefert.
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            Logische Operatoren nutzt man nun, anhand unseres kleinen Beispiels vorher, wie folgt:
          </div>
          <div class="text text-italic text-h6 text-weight-light q-my-md">
            Sam &lt; Timmy && Timmy &lt; Susanne
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            Aber wie können wir das jetzt auch sinnvoll nutzen, ganz einfach, mit console.log(). Was
            ist das? Naja, kurz gesagt eine Funktion, welche von JavaScript selbst zur Verfügung
            gestellt wird.
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            Mit dieser wird es uns erlaubt, Werte oder sonst was auf der Console (F12 im Browser
            oder auch auf Deutsch unter dem Wort KOMMANDOZEILE unter Windows zu finden) auszugeben.
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            Was bringt uns das? Garnichts! Hab ich einfach nur vergessen, das bis jetzt zu erwähnen
            und dachte, hey, was für ein guter und sicherlich gescripteter Witz es hier sein könnte,
            ja. Absolut. Aber weiter im Programm!
          </div>
          <div class="text text-italic text-h6 text-weight-light q-my-md">
            console.log(Sam &lt; Timmy && Timmy &lt; Susanne);
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">In der Konsole:</div>
          <div class="text text-italic text-h6 text-weight-light q-my-md">true</div>
          <div class="text text-h6 text-weight-regular q-my-md">
            Also falls Timmy wirklich kleiner als Susanne und größer als Sam ist.
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            Puhh, jetzt wissen wir, wie wir Variablen anlegen, diese ändern aber auch wie wir diese
            Vergleichen und sinnvollerweise ausgeben, anstatt sie mit einer If-Bedingung zum Rendern
            von Code zu nutzen.
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            Apropos If-Bedingungen, oder auf Deutsch, Wenn-Bedingungen - ja ich weiß, dass keiner
            die so nennt - können genutzt werden, um dem Programm oder Browser zu sagen: “Hey, mach
            das nur wenn, danke, bitte!”.
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            Jetzt wo wir wissen, was das ist, lasst es uns nutzen, um verschiedene Timmys
            auszugeben. Oh, und die Syntax erkläre ich jetzt nicht genauer, hehe. Die werdet ihr
            schon noch selber gleich sehen!
          </div>

          <div class="w-100 flex justify-center">
            <img src="lections/javascript/JavaScript_if_1.svg" class="q-my-lg image" />
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">Und nochmal in uncool:</div>
          <div class="text text-italic text-h6 text-weight-light q-my-md">
            if (Sam &lt; Timmy && Susanne > Timmy){<br />
            console.log(“Sam &lt; Timmy && Susanne > Timmy”);<br />
            }<br />
            else if (Sam > Timmy && Susanne > Timmy){<br />
            console.log(“Sam > Timmy && Susanne > Timmy”);<br />
            }<br />
            else if(Sam > Timmy && Susanne &lt; Timmy){<br />
            console.log(“Sam > Timmy && Susanne &lt; Timmy”);<br />
            }<br />
            //Bonus!<br />
            else{<br />
            console.log(“Alle andere 3*2*1 Optionen”);<br />
            }
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            Kleiner lustiger Einwurf: Die <span class="text-italic text-weight-light">;</span> nach
            jedem Befehl sind keine Dekoration, sondern wichtig, damit JavaScript weiß, dass dieser
            eine Befehl zu Ende ist, also bitte immer schön brav beachten ^^.
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            Oh und die <span class="text-italic text-weight-light">{}</span> geben immer einen neuen
            Scope an, cool oder. Heißt jede lokale Variable (let) ist nur in dem Scope oder darunter
            stehenden Scopes verfügbar, in welchem diese auch erstellt wurde. Genauere Details zu
            Scopes findest du in der ersten Lektion.
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            Noch irgendwelche Frage? Ja, well that’s your bad. Just kidding.
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            Alsoo, bei <span class="text-italic text-weight-light">if</span> kommt die erste
            Bedingung, welche wir überprüfen lassen wollen , hinein. In allen nachfolgenden
            <span class="text-italic text-weight-light">else if</span>s kommen dann weitere
            Bedingungen hinein, welche nur geprüft werden sollen, falls die darüberstehenden, also
            auch das if, keinen Treffer gefunden haben,
            <span class="text-italic text-weight-light">false</span> zurücklieferten.
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            Das <span class="text-italic text-weight-light">else</span> wird nur verwendet, wenn
            alle anderen Bedingungen nicht zugetroffen haben und steht für “alle anderen
            Möglichkeiten”, darum wird hier auch keine Bedingung benötigt. So, und wie kann man
            jetzt mehrere Bedingungen nacheinander machen?
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            Ganz einfach: Mit ifs im if :). Und mehrere Bedingungen nacheinander? Easy, einfach
            mehrere Ifs nacheinander ^^
          </div>
          <hr />
          <div class="text text-h6 text-weight-bold q-my-md">Schleifen (nicht die Bunten):</div>
          <div class="text text-h6 text-weight-regular q-my-md">
            Und was mache ich nun, wenn ich einen Prozess öfter wiederholen möchte?
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            Sagen wir einmal, ich habe eine Array, also eine Liste von Objekten, Werte, whatever -
            ja wir haben das bis jetzt noch nicht gemacht, i knoooooow - und wollen jeden einzelnen
            Wert alleine ausgeben. Dafür gibt es jetzt Schleifen.
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            Und davon sogar mehrere Arten. Für uns sind jetzt erstmal While- und For-Schleifen
            wichtig.
          </div>
          <hr />
          <div class="text text-h6 text-weight-bold q-my-md">While-Schleife:</div>
          <div class="text text-h6 text-weight-regular q-my-md">
            Einfach gesagt, solange die Bedingung true ist, wiederholt sich alles. Immer und immer
            wieder.
          </div>
          <div class="w-100 flex justify-center">
            <img src="lections/javascript/JavaScript_while_loop_1.svg" class="q-my-lg image" />
            <img src="lections/javascript/JavaScript_while_loop_2.svg" class="q-my-lg image" />
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            Ein guter Verwendungszweck dafür wäre unter anderem das unendliche Erweitern eines
            Strings, um den Browser eines Users zum Abstürzen zu bringen. Hier der Code dafür ^^
          </div>
          <div class="text text-italic text-h6 text-weight-light q-my-md">
            let breakVar = “DDos”;<br />
            while (true) {<br />
            breakVar = 'D' + breakVar;<br />
            }
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            Tada! Und so schnell kann man einen Browser oder zu mindestens Tab eines Users
            überfordern. Aja und eine kleine Erklärung,
            <span class="text-italic text-weight-light">true</span> ist unsere Bedingung hier, heißt
            egal was, diese Schleife hört nie auf!
          </div>
          <hr />
          <div class="text text-h6 text-weight-bold q-my-md">For-Schleife:</div>
          <div class="text text-h6 text-weight-regular q-my-md">
            Eine For-Schleife geht x-Durchgänge durch, durchaus praktisch. Wofür kann man das nun
            brauchen? Naja, wenn man zu faul ist, eine While-Schleife mit einem hochzählenden
            Prozess (Variable und Wertzuweisung/Erhöhung) zu modifizieren, bietet eine For-Schleife
            schon alles, was man braucht.
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            Möchte man 10 Mal einen Wert ausgeben, oder eine Array auslesen, bei beiden ist eine
            For-Schleife ein Must-Have!
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            Kleines Beispiel, um mal etwas schneller voran zu schreiten:
          </div>
          <div class="text text-italic text-h6 text-weight-light q-my-md">
            let array = [1,2,3,4,5,6];<br />
            for(let i = 0; i &lt; array.length; i++){<br />
            console.log(array[i]);<br />
            }
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            Kurze Basics zu Arrays. Wie vorher schon gesagt, sind Arrays Listen von Objekten oder
            Werten, bei uns oben, beinhaltet die Liste verschiedene Zahlen (Numbers).
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            Weil wir cool sind und die Zahl 0 aus Liebe zu unserem Computer mögen, beginnen wir,
            wenn es ums Programmieren geht, meistens mit der Zahl 0 beim Zählen, heißt unser erstes
            Objekt in der Array nennen wir das 0-te Objekt.
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            Wie greifen wir jedoch jetzt auf Elemente in der Array zu? Ganz einfach. Wir geben nach
            unserer Array (array) einfach innerhalb von ein paar nicen eckigen Klammern ([], wow die
            sehen ja aus wie die Klammern bei der Deklaration der Array, what a coincidence) an,
            welche Stelle wir gerne stibitzen würden.
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            Also für das erste Element der Array wäre das jetzt:
            <span class="text-italic text-weight-light">array[0];</span> und für die Letzte:
            <span class="text-italic text-weight-light">array[array.length-1];</span>
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            Und was ist jetzt <span class="text-italic text-weight-light">array.length</span> und
            dieses -1 für? Naja, array.length gibt uns irgendwie passend auch, die Länge der Array
            an, also wie viele Elemente diese beinhaltet und das -1 ist dafür da, dass wir ja mit 0
            beginnen zu zählen und somit auch das letzte Element einer 12 Elemente langen Liste als
            11-tes Element bezeichnen, obwohl die Länge ja eigentlich 12 wäre.
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            Easy? Ja. Also weiter im Programm.
          </div>
          <hr />
          <div class="text text-h6 text-weight-regular q-my-md">
            Könnt ihr euch noch an die For-Schleife von vorher erinnern? Jagut, ich auch nicht, Also
            hier nochmal:
          </div>
          <div class="text text-italic text-h6 text-weight-light q-my-md">
            let array = [1,2,3,4,5,6];<br />
            for(let i = 0; i &lt; array.length; i++){<br />
            console.log(array[i]);<br />
            }
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            Und auch noch eine kurze Erklärung:
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            <span class="text-italic text-weight-light">let i = 0;</span> Erstellt eine Variable
            welche im Scope der For-Schleife gültig ist und gibt ihr einen Anfangswert von 0 (man
            kann natürlich auch was anderes nehmen).
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            <span class="text-italic text-weight-light">i &lt; array.length;</span> Ist unsere
            Bedingung, solange diese erfüllt wird, wiederholt sich unser Code-Abschnitt innerhalb
            der For-Schleife.
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            <span class="text-italic text-weight-light">i++;</span> Die Funktion, welche nach jedem
            Durchgang ausgeführt werden soll, bei uns wird i um 1 nach jedem Durchgang erhöht.
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            Und der Rest sollte simpel sein. YaY!
          </div>
          <hr />
          <div class="text text-h6 text-weight-bold q-my-md">Funktionen:</div>
          <div class="text text-h6 text-weight-regular q-my-md">
            Cooles Thema, aber davon mehr in der HTL, viel Spaß!
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            Na, joke. Es gibt bessere Quellen, nämlich mich oder das Internet. Well, probably das
            Internet aber, hey, ich bin part davon baby!
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            Aber kurze Zusammenfassung (nicht relevant für den Escape Room, oder kaum, aber ich fühl
            mich irgendwie gezwungen es wenigstens anzuschneiden). Funktionen sind Code-Abschnitte,
            welche man öfter verwenden möchte, aber nicht öfter schreiben möchte. Cool, oder?
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            Einfach gesagt, man erstellt eine Funktion und kann diese später im Code aufrufen. Damit
            eine Funktion divers genutzt werden kann, können sogenannte Parameter übergeben werden,
            welche beim Aufruf einen gewünschten Wert annehmen und dann in der Funktion genutzt
            werden können.
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            Kurzes Beispiel und dann bin ich auch schon weg!
          </div>

          <div class="text text-italic text-h6 text-weight-light q-my-md">
            function eineFunktion(zahl1, zahl2){<br />
            let summe = zahl1 + zahl2;<br />
            return summe;<br />
            }<br />
            console.log(eineFunktion(10,2));
          </div>

          <div class="text text-h6 text-weight-regular q-my-md">
            Mini-Erklärung: <span class="text-italic text-weight-light">function</span> ist wie
            <span class="text-italic text-weight-light">let</span> oder
            <span class="text-italic text-weight-light">const</span> unsere Art, JavaScript zu
            sagen, dass wir eine Funktion deklarieren wollen.
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            <span class="text-italic text-weight-light">eineFunktion</span> ist wie wir die Funktion
            nennen wollen und zahl1, zahl2 sind unsere Parameter.
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            Mit <span class="text-italic text-weight-light">return</span> geben wir einen Wert
            zurück, welcher dann im z.B. console.log() genutzt wird. Bei unserem Beispiel würde
            jetzt 12 in der Konsole ausgegeben werden.
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            Aber jetzt Schluss mit lustig und ab in die Konsole!
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            <a href="https://codepen.io/hochstegerL03/pen/PodzGKm"
              >Übung: Grundlagen von JavaScript</a
            >
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            <a href="https://codepen.io/hochstegerL03/pen/ZEMOpJm"
              >Lösung: Grundlagen von JavaScript:</a
            >
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            Achtung! Es ist dieses Mal zu empfehlen, die Übung lokal über Visual Studio Code zu
            machen!
          </div>

          <hr class="q-my-lg" />
        </div>
        <!--Section 1 End-->
      </div>
      <!--Body/Text End-->
    </div>
    <!--Part 2: Notes End-->
    <!--Part 3: Questions-->
    <div id="questions" class="flex justify-center">
      <!--Body/Text-->
      <div class="w-80">
        <!--Header-->
        <div>
          <div class="text text-h4 text-weight-regular q-my-md">Basics</div>
        </div>
        <!--Header End-->
        <!--Questions-->
        <div class="flex justify-center">
          <q-form>
            <div v-for="(question, index) in questions" :key="question.id">
              <!--Multiple Choice Question-->
              <EtSQuestionMutlipleChoice
                v-if="question.type == 'multipleChoice'"
                @changeAnswer="changeAnswer"
                :question="question"
              ></EtSQuestionMutlipleChoice>
              <!--Multiple Choice Question End-->
              <!--Text Input Question-->
              <EtSQuestionTextInput
                v-else-if="question.type == 'textInput'"
                @changeAnswer="changeAnswer"
                :question="question"
              >
              </EtSQuestionTextInput>
              <!--Text Input Question End-->
              <!--Build Answer Question-->
              <EtSQuestionBuildAnswer
                v-else-if="question.type === 'buildAnswer'"
                @changeAnswer="changeAnswer"
                :question="question"
              ></EtSQuestionBuildAnswer>
              <!--Build Answer Question End-->
            </div>
          </q-form>
        </div>
        <!--Questions End-->
        <!--Checkbar-->
        <div class="w-100 row justify-center items-start q-my-xl">
          <div class="col-6">
            <div
              class="text-center fakebutton text-secondary ets-header text-h5 text-weight-bold"
              @click="trySub()"
            >
              Check
            </div>
            <div class="text-center ets-header text-grey text-caption text-italic text-weight-light">
              <span v-if="falseQ.length > 0">{{ falseQ.length }} Error/s found.</span>
              <span v-else>0 Errors found.</span>
              <span class="jumperlink">click here!</span>
            </div>
          </div>
          <div class="col-6 text-center ets-header text-h6 text-weight-bold">
            <div class="text-center text-secondary ets-header text-h5 text-weight-bold">
              Go Next!
            </div>
            <div class="text-center ets-header text-grey text-caption text-italic text-weight-light">
              Check your Answers to get a Star
            </div>
          </div>
        </div>
        <!--Checkbar End-->
      </div>
      <!--Body/Text End-->
    </div>
    <!--Part 1: Story End-->
  </div>
</template>
<style lang="scss" scoped>
.absolutetop {
  z-index: 999;
}
.menustatic {
  background-color: $secondary;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
}
.fakebutton {
  cursor: pointer;
}

.jumperlink {
  text-decoration: underline;
}

.image {
  width: 100%;
}
.image-long {
  max-height: 10rem;
}
</style>
<script setup>
import EtSQuestionMutlipleChoice from '../components/EtSQuestionMutlipleChoice.vue';
import EtSQuestionTextInput from '../components/EtSQuestionTextInput.vue';
import EtSQuestionBuildAnswer from '../components/EtSQuestionBuildAnswer.vue';
import { scroll } from 'quasar';
import { ref } from 'vue';

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
  console.log(answer);
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
