<template>
  <div>
    <!--Menu-->
    <div class="fixed-bottom-right ets-absolute-top">
      <div
        @click="scrolltovertically('text')"
        v-if="showmenu"
        class="ets-bubble-menu ets-title text-h3 q-my-md q-mx-lg text-white text-center"
      >
        <div class="flex items-center justify-center ets-h-100 w-100 ets-fake-button">t</div>
      </div>
      <div
        @click="scrolltovertically('lection')"
        v-if="showmenu"
        class="ets-bubble-menu ets-title text-h3 q-my-md q-mx-lg text-white text-center"
      >
        <div class="flex items-center justify-center ets-h-100 w-100 ets-fake-button">l</div>
      </div>
      <div
        @click="scrolltovertically('questions')"
        v-if="showmenu"
        class="ets-bubble-menu ets-title text-h3 q-my-md q-mx-lg text-white text-center"
      >
        <div class="flex items-start justify-center ets-h-100 w-100 ets-fake-button">q</div>
      </div>
      <div
        @click="showmenu = !showmenu"
        class="ets-bubble-menu ets-title text-h3 q-my-md q-mx-lg text-white text-center"
      >
        <div class="flex items-center justify-center ets-h-100 w-100">i</div>
      </div>
    </div>
    <!--Menu End-->
    <!--Part 1: Story-->

    <div id="text" class="flex justify-center">
      <!--Body/Text-->

      <div class="ets-w-80">
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
      <div class="ets-w-80">
        <div class="text text-h4 text-weight-regular q-mt-lg">Introduction</div>
        <figcaption class="text-weight-light text-italic q-mt-xs q-mb-lg">
          - Environment und Setup
        </figcaption>
        <!--Header End-->
        <!--Section 1-->
        <div>
          <div class="text text-h6 text-weight-regular q-my-md">
            Um Webseiten zu programmieren braucht man eigentlich nicht viel mehr als einen
            Texteditor und eine funktionierende Tastatur (eine Maus wäre natürlich auch zu
            empfehlen).
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            Jedoch heißt das aber auch, viel Syntax auswendig lernen zu müssen. Und dafür sind wir
            schließlich nicht hier.
          </div>
          <div class="w-100 flex justify-center">
            <img src="lections/introduction/Introduction_text-editor_1.PNG" class="q-my-lg image" />
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            Und visuell haut uns dieser Texteditor auch nicht vom Hocker! Selbst ich kenne mich da
            bei meinem eigenen Code gleich kaum noch aus.
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            Und sprechen wir gar nicht erst vom horizontalen und vertikalen Scroll-Erlebnis, denn
            erleben möchte man das wohl eher kaum.
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            t Mit Anwendungen wie
            <a href="https://code.visualstudio.com/">Visual Studio Code</a> können wir uns aber
            viele dieser Mühen ersparen.
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            Zusätzlich erleichtert es uns auch, unseren Code später lokal zu hosten und
            auszuprobieren.
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            Darum, oft ungerne gesehen und meistens recht unspannend, folgt nun ein kleines Tutorial
            zum Setup unseres Environments, wie die Vorstellung eines weiteren kleinen Gadgets,
            welches wir gerne mal im Laufe der Lektionen verwenden.
          </div>
          <hr />

          <div class="text text-h6 text-weight-bold q-my-md">Visual Studio Code:</div>
          <div class="text text-h6 text-weight-regular q-my-md">
            Zuerst sollte man wissen, dass Visual Studio Code selbst entweder lokal, also nach einem
            Download direkt am Computer, somit auch ohne notwendige Internetverbindung, oder übers
            Web, also im Browser, laufen kann.
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            Wir wollen jedoch Visual Studio Code nun offline nutzen, da einige Erweiterungen und
            coole Features im Web nicht unterstützt werden.
          </div>
          <div class="text text-italic text-h6 text-weight-light q-my-md">
            Für all welche, die jedoch sich mit der Browserversion beschäftigen wollen:
            <a href="https://code.visualstudio.com/">Visual Studio Code Web</a>.
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            Kommen wir jedoch zum Download, Nach einer kleinen typischen und geliebten Prozedur des
            Leidens sollte Visual Studio Code ähnlich dem gleichen:
          </div>
          <div class="w-100 flex justify-center">
            <img
              src="lections/introduction/Introduction_visual-studio-code_1.PNG"
              class="q-my-lg image"
            />
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            Falls der Hintergrund etwas heller und augenstechender ist einfach Strg+K und danach
            Strg+T drücken.
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            Im folgenden Menü können wir dann das Color Theme von Visual Studio Code ändern.
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            Keine Sorge, falls keines deinem Geschmack entspricht gibt es dutzend unter
            Erweiterungen zum Installieren.
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            Und zum Thema Erweiterungen. Erweiterungen sind, was Visual Studio Code ausmacht, denn
            durch diese können wir Hilfen und visuelle Goodies uns unter den Nagel reißen.
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            Einige Erlesene wissen das hier sicherlich schon, aber Visual Studio Code wurde nicht
            nur für HTML gemacht, sondern kann auch Programmiersprachen wie Python oder Frameworks
            wie Vue.js unterstützen, jedoch nur, solange man auch die richtigen Erweiterungen
            installiert hat!
          </div>
          <hr />
          <div class="w-100 flex justify-center">
            <img
              src="lections/introduction/Introduction_visual-studio-code-extensions_1.png"
              class="q-my-lg image"
            />
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            Als allererstes, auch wenn es wirklich simpel ist, so sieht das Zeichen für
            Erweiterungen aus und so auch das Menü.
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            Suchen und wie man den “Installieren” Button zu klicken hat, muss ich hoffentlich nicht
            weiter erläutern :)
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            Darum eine kleine Checkliste für euch:
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            <ul class="lineList">
              <li>Live Preview (optional) - Microsoft</li>
              <li>Live Server - Ritwick Dey</li>
              <li>Prettier - Code formatter - Prettier</li>
              <li>Auto Close Tag - Jun Han</li>
              <li>Auto Rename Tag - Jun Han</li>
              <li>Highlight Matching Tag - vincaslt</li>
              <li>HTML CSS Support - ecmel</li>
              <li>htmltagwrap - Brad Gashler</li>
              <li>IntelliSense for CSS class names in HTML - Zignd</li>
              <li>JavaScript (ES6) code snippets - charalampos karypidis</li>
            </ul>
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            Sooo, das waren jetzt zwar ein paar Extensions, aber hey, wenigstens sind sie klein und
            schnell zum herunterladen :)
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            Und was jetzt? Naja, der Rest in Visual Studio Code ist ziemlich selbst erklärend.
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            Über “File” kann man einen Ordner oder ein File öffnen und mit Rechtsklick auf ein File
            kann man tolle Sachen mit diesem machen, wie zum Beispiel unseren Live-Server starten.
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            Beim Hovern über einem Ordner fallen einem vielleicht noch ein paar kleine Symbole auf,
            welche man anklicken könnte (kann sicher nicht schaden, das einmal auszuprobieren).
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            Aber ansonsten sind wir hier erst mal fertig!
          </div>
          <hr />
          <div class="text text-h6 text-weight-regular q-my-md">
            Aber hey, hab ich nicht irgendwas von einem kleinen Gadget gesagt?
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            Natürlich hab ich das, also lasst uns
            <a href="https://codepen.io/your-work">CodePen</a> willkommen heißen!
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            Nicht immer wollen oder müssen wir lokal über Visual Studio Code arbeiten, auch wenn das
            natürlich immer schön ist, wollen wir ja ein bisschen Mobilität in den Alltag bringen.
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            Über CodePen kannst du nun ganz einfach über unser Profil die verschiedensten Aufgaben
            finden und lösen, alles ohne an einem Rechner sitzen zu müssen.
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            Und <a href="https://codepen.io/hochstegerL03">hier</a> geht es auch schon direkt zu
            unserem kleinen Profil, ein Follow wäre natürlich immer lieb an dieser Stelle.
          </div>

          <hr class="q-my-lg" />
        </div>

        <div class="text text-h4 text-weight-regular q-mt-lg">Was ist HTML</div>
        <figcaption class="text-weight-light text-italic q-mt-xs q-mb-lg">
          - The Constructor
        </figcaption>
        <div>
          <div class="text text-h6 text-weight-regular q-my-md">
            HTML (Hypertext Markup Language) ist eine Beschreibungssprache, welche für die
            Entwicklung im Web von Anfang bis Ende nicht wegzudenken ist.
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            Der Sinn hinter solch einer Beschreibungssprache ist es, die Anordnung und Struktur
            innerhalb einer Aufgabe, in diesem Fall, wie der genutzte Browser zum Aufrufen der
            Webseite diese interpretieren und umsetzen soll, textbasiert zu beschreiben.
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            Hierbei werden sogenannte Tags genutzt, um bestimmte semantische Strukturen genormt in
            einem inkludierten Wertebereich (Zeilenabschnitt), dem Browser, mitzuteilen.
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            Derzeit wird dafür HTML5 oder auch xHTML genutzt.
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            Frühere Versionen, wie HTML4, existieren zwar noch, sollten jedoch heutzutage nicht mehr
            verwendet werden.
          </div>
          <div class="w-100 flex justify-center">
            <img src="lections/html/HTML_visual_structure_1.svg" class="q-my-lg image" />
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            Das alles klingt zwar schön und gut, jedoch hilft uns das bei der Entwicklung selbst
            nicht weiter.
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            Um das Thema und HTML selbst etwas verständlicher zu gestalten, werden wir uns daher an
            praktischen Beispielen und der online zur Verfügung stehenden Dokumentation orientieren.
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            Also genug Hypotaxen! Legen wir los!!
          </div>
          <hr />
          <div class="text text-h6 text-weight-regular q-my-md">
            Bevor wir mit irgendwelchen fancy Tags oder Design-Layouts loslegen können, müssen wir
            uns jedoch mit der Basis-Struktur von HTML vertraut machen!
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            Damit der Browser, also das Web, unsere HTML-Datei auch als solche ansieht, müssen wir
            nicht nur die Datei mit .html erstellen, sondern auch ein paar grundlegende Tags
            deklarieren, also erstellen.
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            Der &lt;!DOCTYPE html> sagt erstmal aus, dass es sich bei diesem Dokument (!DOC), um den
            Typen (TYPE) HTML (html) handelt.
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            &lt;!DOCTYPE html> ist dabei nicht Case-Sensitive und muss auch nicht am Ende des
            Dokumentes geschlossen werden. Mit diesem Tag werden wir daher nicht viel mehr machen,
            als ihn am Anfang des Dokuments zu deklarieren!
          </div>
          <div class="text text-italic text-h6 text-weight-light q-my-md">
            Case-Sensitive bedeutet, dass Groß- und Kleinschreibung hierbei nicht berücksichtigt
            werden, wodurch auch Schreibweisen wie diese möglich sind: &lt;!DOCTYPE html>.
          </div>
          <div class="text text-italic text-h6 text-weight-light q-my-md">
            Natürlich ist so etwas nicht unbedingt angenehm zu lesen und wird daher ungern gesehen.
            Allgemein gilt daher:
          </div>
          <div class="text text-italic text-h6 text-weight-light q-my-md">
            Variablen und Tags sollten immer dem camelCase oder dem snake_case folgen. Beide
            Begriffe lernen wir später noch näher kennen.
          </div>
          <hr />
          <div class="w-100 flex justify-center">
            <img src="lections/html/HTML_visual_paired-tags_1.svg" class="q-my-lg image" />
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            Der wohl wichtigste Tag, der &lt;html>...&lt;/html> steht direkt an unserer zweiten
            Stelle.
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            Was uns hier direkt auffällt ist, dass im Gegensatz zum &lt;!DOCTYPE html>, dieser Tag
            immer in einem Paar kommt und mit &lt;html> geöffnet, wie mit &lt;/html> geschlossen
            werden muss.
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            Solche Tags gibt es in Häufen und werden allgemein als “Paired Tags” bezeichnet. Diese
            Art von Tag wird immer mit dem gleichen Schlüsselwort plus einem vorgestellten “/”
            beendet.
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            Aber auch an diesem Tag werden wir gebräuchlich nicht mehr viel herumbasteln,
            stattdessen werden wir ihn nur schnell deklarieren und mit unserem Code in einem
            untergeordneten Scoop fortführen.
          </div>
          <hr />
          <div class="w-100 flex justify-center">
            <img src="lections/html/HTML_visual_scope_2.svg" class="q-my-lg image" />
          </div>
          <div class="text text-italic text-h6 text-weight-light q-my-md">
            Scope: Ein Scope ist ein Bereich, in welchem bestimmte Variablen oder Werte ihren
            Gültigkeitsbereich definiert haben, dabei kann man sich es wie folgt vorstellen:
          </div>
          <div class="text text-italic text-h6 text-weight-light q-my-md">
            Im Falle von HTML bildet jedes Paired Tag eine weitere Ebene / Hülle, in welche
            dazwischen stehende Elemente eingeschlossen sind..
          </div>
          <div class="text text-italic text-h6 text-weight-light q-my-md">
            Zur Veranschaulichung kann man daher eine Matrjoschka-Puppe nutzen.
          </div>
          <div class="text text-italic text-h6 text-weight-light q-my-md">
            Jedes Element ist in einer Puppe verankert und kann diese nicht verlassen, außer man
            gibt ihm die “Rechte” die Puppe zu öffnen und auf eine höhere Ebene voranzuschreiten.
          </div>
          <div class="w-100 flex justify-center">
            <img src="lections/html/HTML_visual_scope_1.svg" class="q-my-lg image" />
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            In unserem geliebten &lt;html> Tag gibt es nun wieder zwei wichtige und unwegdenkbare
            Tags:
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            &lt;head>&lt;/head>: Hier geben wir alle wichtigen Core-Informationen über unsere
            Webseite an, wie Verlinkungen zu anderen Ressourcen.
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            Wir besprechen diese Tags später noch in Fülle anhand mehrerer Beispiele und Fragen.
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            Bis dahin beschäftigen wir uns jedoch noch etwas genauer mit dem &lt;body>&lt;/body>
            Tag, da dieser den ganzen sichtbaren Kontent unserer Webseite beinhaltet.
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            Wie mit dem vorherigen Satz sicher schon klar wurde, kommen etwa 90% unseres HTML-Codes
            zwischen dem Start- und Endtag unseres Body’s.
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            Um jedoch den Umfang hier etwas kürzer zu halten, stellen wir dir nur kurz ein paar
            wichtige Tags vor und zeigen sie dir, mit dazugehöriger Erklärung in einem kleinen
            Code-Pen Beispiel.
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            &lt;div>&lt;/div> : Ein Block-Element welches, wenn nicht anders definiert, eine ganze
            Zeile (deren Höhe abhängig vom Kontent und der Höhe des Divs abhängig ist) einnimmt.
            Divs bilden somit ein gutes Mittel, um Scoops anzulegen und Elemente zu gruppieren!
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            &lt;p>&lt;/p> : Dieser Tag wird genutzt, um Text anzuzeigen. Weitere Tags mit einer
            ähnlichen Wirkungskraft (jedoch anderen Schrifteigenschaften) wären: h1 bis h6, dass h
            für “Header” also Überschrift stehend. Der zu anzeigende Text wird bei all diesen Tags
            zwischen Start- und Endtag geschrieben.
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            &lt;img src="”...”" alt="”...”" />: Dieser Tag wird genutzt um Bilder auf einer Webseite
            zu laden. Hierbei kann bei src (Source / Quelle) entweder ein lokaler Pfad zu einem Bild
            oder auch ein Link zu einem Bild aus dem Web angegeben werden. Der Inhalt beim
            alt=”...”-Part wird beim Fehlschlagen des Bildladens auf der Webseite angezeigt, kann
            jedoch auch genutzt werden, um z.B. Bildschirm-Assistenten zu sagen, was genau an dieser
            Stelle sein sollte.
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            &lt;ungültig>&lt;/ungültig>: Falls wie hier ein nicht bekannter Tag genutzt wird, wird
            der Inhalt dazwischen jedoch angezeigt, übernimmt dabei aber die Werte von seinem
            Parent-Scoop/Object. Zu dieser Hierarchie- oder Vererbungs-Eigenschaft von HTML kommen
            wir jedoch noch später.
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            Gut! Genug Theorie für den Anfang: Eine kleine Übung + Lösung haben wir hier für dich
            vorbereitet:
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            <a href="https://codepen.io/hochstegerL03/pen/qByeKKq ">Übung: Grundlagen von HTML:</a>
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            <a href="https://codepen.io/hochstegerL03/pen/gOjVKje ">Lösung: Grundlagen von HTML:</a>
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            Auf der Suche nach einer geeigneten Quelle für syntaktische oder semantische
            Eigenschaften von HTML? Hier sind ein paar der offiziellen Dokumentationen über HTML:
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            <a href="https://developer.mozilla.org/en-US/docs/Web/HTML?retiredLocale=de"
              >Offizielle Dokumentation</a
            >
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            <a href="https://devdocs.io/html/ ">Dev Docs</a>
          </div>
          <div class="text text-h6 text-weight-light text-italic q-my-md">
            Achtung! Devdocs ist auch offline nutzbar, also der Spitzenkandidat für Tests in
            späteren technischen Ausbildungen!
          </div>

          <hr class="q-my-lg" />
        </div>

        <!--Header-->
        <div class="text text-h4 text-weight-regular q-mt-lg">Was ist CSS?</div>
        <figcaption class="text-weight-light text-italic q-mt-xs q-mb-lg">
          - The Designer
        </figcaption>
        <!--Header End-->
        <!--Section 1-->
        <div>
          <div class="text text-h6 text-weight-regular q-my-md">
            Wir können zwar jetzt Sachen anordnen, aber schön sieht das Ganze noch nicht wirklich
            aus.
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            Mit CSS ändern wir das aber mal ganz flott. CSS ist eine Beschreibungssprache, ganz wie
            HTML und dient dazu, das Verhalten und die Gestalt unserer HTML-Objekte zu manipulieren.
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            Also was müssen wir wissen, um mit CSS starten zu können?
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            Also als erstes ist es wichtig zu verstehen, dass wir kein Grundgerüst, wie in HTML,
            benötigen und direkt nach dem Anlegen einer Datei, mit dem Kürzel .css, losstarten
            können.
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            Als nächstes wäre es auch praktisch zu wissen, was Klassen sind, denn die werden wir
            öfter nutzen müssen.
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            Zusätzlich erleichtert es uns auch, unseren Code später lokal zu hosten und
            auszuprobieren.
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            Einfach gesagt, in CSS erstellen wir Regeln, wie der Browser bestimmte Sachen für uns
            darstellen soll. Diese Regeln, können wir dann in html einen Objekt innerhalb der
            <span class="text-italic text-weight-light">&lt;></span> (Spitzen-Klammern) eines Tags
            mit dem Stichwort
            <span class="text-italic text-weight-light">class=”unsereCSSKlasse”</span> übergeben.
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            Das könnte also nun wie folgt so ausschauen:
          </div>
          <div class="text text-italic text-h6 text-weight-light q-my-md">
            &lt;p> class=”coolerParagraph”>&lt;/p>
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            Das ist schon mal ganz cool, ne? Aber vielleicht sollte ich auch noch erklären, wie wir
            diese Klasse oder Regeln für
            <span class="text-italic text-weight-light">coolerParagraph</span> anlegen.
          </div>

          <div class="text text-h6 text-weight-regular q-my-md">
            Also, schnell und einfach, es gibt drei Arten eine Klasse zu deklarieren: mit einem
            <span class="text-italic text-weight-light">#, .</span>
            oder nix vor dem Namen der Klasse. Wofür die 3 Zeichen?
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            Naja, ein Punkt vor dem Namen steht dafür, dass wir einer Klasse, welcher wir einen Tag
            mit <span class="text-italic text-weight-light">class</span> übergeben können. anlegen
            wollen.
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            Ein Hashtag steht dafür, dass wir einem Objekt mit einer speziellen ID dieser Klasse
            zuweisen wollen. Zu IDs kommen wir später noch.
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            Kein Zeichen vor dem Namen steht dafür, dass alle Tags, mit dieser Bezeichnung, so
            formatiert werden sollen..
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            Aber wie funktioniert das Ganze nun grundsätzlich? Nehmen wir mal unseren
            <span class="text-italic text-weight-light">coolerParagraph</span> als Beispiel.
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            Es handelt hier sich wahrscheinlich darum, dass wir den Text gerne anders hätten.
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            Da gibt es jetzt ganz viele Möglichkeiten, welche ich sicherlich nicht alle aufzählen
            und erklären kann. Dafür sind die Online Dokumentationen sehr wichtig.
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            In dieser Lektion schneiden wir daher nur ein paar wichtige Stichwörter oder
            <span class="text-italic text-weight-light">Optionen</span>, wie
            <span class="text-italic text-weight-light">Properties</span> an.
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            Für Text gebe es daher folgende:
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            <ul class="lineList">
              <li>
                <b>color:</b> Die Farbe der Schrift. Kann als
                <span class="text-italic text-weight-light">Hex (#000000)</span>,
                <span class="text-italic text-weight-light">RGB (rgb(0,0,0,0))</span>
                oder mit einem vordefinierten Namen (<span class="text-italic text-weight-light"
                  >red, yellow, etc.</span
                >) festgelegt werden.
              </li>
              <div class="text text-italic text-h6 text-weight-light q-my-md">
                Wofür die 4te Null bei RGB steht? Ganz einfach, damit gibt man die Transparenz an. 1
                ist dabei 100% sichtbar und 0 wäre komplett transparent.
              </div>
              <li>
                <b>font-family:</b> Gibt an, welche Schriftart benutzt werden soll. Es gibt
                bestimmte Schrifte, welche standardmäßig vorhanden sind, ansonsten müssen diese im
                HTML File verlinkt werden.
              </li>
              <li>
                <b>font-weight:</b> Gibt an, wie Dick die Schrift aussehen soll. Soll sie
                <span class="text-italic text-weight-light">bold</span>,
                <span class="text-italic text-weight-light">bolder</span>,
                <span class="text-italic text-weight-light">lighter</span> oder
                <span class="text-italic text-weight-light">normal</span> sein.
              </li>
              <li>
                <b>font-style:</b> Ähnlich wie
                <span class="text-italic text-weight-light">font-weight</span>, nur dass nicht die
                Dicke der Schrift, sondern die Art der Schrift angegeben wird. Also
                <span class="text-italic text-weight-light">italic</span>,
                <span class="text-italic text-weight-light">bold</span> und
                <span class="text-italic text-weight-light">normal</span>.
              </li>
              <li>
                <b>font-size:</b> Sagt HTML wie groß die Schrift sein soll. Dafür haben wir mehrere
                Einheiten, wie <span class="text-italic text-weight-light">px</span>,
                <span class="text-italic text-weight-light">rem</span>,
                <span class="text-italic text-weight-light">em</span>, (fixe Werte) oder
                <span class="text-italic text-weight-light">%</span>,
                <span class="text-italic text-weight-light">vw</span> und
                <span class="text-italic text-weight-light">vh</span> (dynamische Werte, ändern sich
                mit der Größe des Fensters).
              </li>
              <li><b>letter-spacing:</b> Der Abstand zwischen den einzelnen Schriftzeichen.</li>
              <li><b>line-height:</b> Der Abstand zwischen den einzelnen Zeilen.</li>
              <li>
                <b>text-align:</b> Wo der Text in seinem Container (Platz, welchen der Tag einnimmt)
                stehen soll. Hier gibt es die 3 Optionen von
                <span class="text-italic text-weight-light">left</span>,
                <span class="text-italic text-weight-light">right</span> und
                <span class="text-italic text-weight-light">center</span>.
              </li>
              <li>
                <b>text-decoration:</b> Damit können wir coole Sachen, wie underline oder overline
                erstellen. Hier wird es schon komplexer, da man Farbe, Style (<span
                  class="text-italic text-weight-light"
                  >wavy</span
                >, <span class="text-italic text-weight-light">solid</span>), Dicke (<span
                  class="text-italic text-weight-light"
                  >px</span
                >, <span class="text-italic text-weight-light">rem</span>,
                <span class="text-italic text-weight-light">%</span>) und was (<span
                  class="text-italic text-weight-light"
                  >overline</span
                >, <span class="text-italic text-weight-light">underline</span>) angeben muss.
              </li>
              <li>
                <b>text-transform:</b> Damit können wir sagen, dass wir unter anderem wollen, dass
                alles in <span class="text-italic text-weight-light">uppercase</span> oder
                <span class="text-italic text-weight-light">lowercase</span> dargestellt werden
                soll. Kann ganz nützlich sein, aber könnte man auch unschön direkt in HTML lösen.
              </li>
              <li>
                <b>text-variant:</b> Hiermit kann man bestimmen, ob ein Text in z.B.
                <span class="text-italic text-weight-light">small-caps</span>
                dargestellt werden soll, cool ne? (Frag mich nicht wofür man das realistisch gesehen
                braucht).
              </li>
            </ul>
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            So. Jetzt kennen wir ganz viele Optionen, aber wie nutzen wir die? Gute Frage und dafür
            auch gleich ein kleines Beispiel, vielleicht kann man damit auch gleich den Aufbau einer
            Klasse erraten.
          </div>
          <div class="text text-italic text-h6 text-weight-light q-my-md">
            .coolerParagraph{ <br />color: red; <br />font-style: italic; <br />text-decoration:
            solid underline #006d77 7px; <br />font-size: 1rem; <br />font-family: Arial, Helvetica,
            sans-serif; <br />}
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            So jetzt haben wir gleich mal ein paar tolle Properties im Einsatz gesehen und
            zusätzlich sogar, wie so eine Klasse aufgebaut ist. Also, was ist nun das Wichtigste zur
            Syntax?
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            Naja, wir schreiben immer
            <span class="text-italic text-weight-light">property: werte;</span> Der
            <span class="text-italic text-weight-light">;</span> gibt an, dass wir mit dem Property
            mal fertig sind und nicht in der nächsten Zeile noch immer was hinzufügen wollen.
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            Die <span class="text-italic text-weight-light">{}</span> geben Anfang und Ende unserer
            Klasse an. Alles zwischen den Beiden zählt zu dieser Klasse.
          </div>
          <hr />
          <div class="text text-h6 text-weight-regular q-my-md">
            Und was ist mit diesen IDs, die ich vorher erwähnt habe? Naja, eine ID ist wie ein Name,
            ein einzigartiger Name.
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            Jede ID kann in HTML nur einmal vergeben werden und dient dazu, dass wir ein Objekt klar
            von allen anderen unterscheiden können, was manchmal sehr praktisch ist.
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            Wie geben wir eine ID nun aber nur her? Na so:
          </div>
          <div class="text text-italic text-h6 text-weight-light q-my-md">
            &lt;p id="”Timmy”">&lt;/p>
          </div>
          <div class="w-100 flex justify-center">
            <img src="lections/css/CSS_ids_1.svg" class="q-my-lg image image-long" />
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            So das wars aber auch schon mit unserem Ausflug zu IDs!
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            Sind wir eigentlich jetzt mit CSS schon fertig? Naja, nicht wirklich. Es gibt tausende
            Optionen in CSS. Von Keyframes, zu –webkit, dem Verschachteln von Klassen und vieles
            weitere, aber das wäre zu komplex für den Anfang.
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            Darum hier noch weitere wichtige Properties, mit welchen wir herumspielen können:
          </div>
          <hr />
          <div class="text text-h6 text-weight-bold q-my-md">Padding & Margin:</div>
          <div class="text text-h6 text-weight-regular q-my-md">
            Was ist das? Gute Frage, anstrengend zu beantworten. Einfach gesagt, damit geben wir
            einen Abstand um ein Element an.
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            Dieser Abstand kann innerhalb (padding) des Objektes sein oder außerhalb (margin). Um
            mir viele Worte zu ersparen, hier eine kleine Grafik.
          </div>
          <div class="w-100 flex justify-center">
            <img src="lections/css/CSS_margin_padding_1.svg" class="q-my-lg image" />
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            Und wie machen wir das jetzt in CSS? Ja einfach so:
          </div>
          <div class="text text-italic text-h6 text-weight-light q-my-md">
            .example{ <br />padding: 1rem; <br />margin: 1rem; <br />}
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            Tada! Jetzt haben wir in alle Richtungen jeweils 1rem Padding und Margin! Und die coolen
            Kids können jetzt auch noch einen Padding oder ein Margin nur oben, rechts, unten oder
            links bestimmen und das so:
          </div>
          <div class="text text-italic text-h6 text-weight-light q-my-md">
            .example{ <br />padding: 1rem 0rem 1rem 0rem; /* padding oben und unten */ <br />margin:
            0rem 1rem 0rem 1rem; /* margin links und rechts */ <br />}
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            Und was sind diese coolen
            <span class="text-italic text-weight-light">/* Kommentare */</span> nun. Naja,
            Kommentare, hab ich ja schon erwähnt!
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            Noch mehr nützliches Wissen? Sure, here you got it!
          </div>
          <hr />
          <div class="text text-h6 text-weight-bold q-my-md">Einheiten:</div>
          <div class="text text-h6 text-weight-regular q-my-md">
            Naja, wir können jetzt auch verschiedene Maßen nutzen, um unsere Größen zu bestimmen.
            Beginnen wir also einfach. <span class="text-italic text-weight-light">px</span> sind
            eine fixe Einheit, nämlich die Pixel am Bildschirm. Next!
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            <span class="text-italic text-weight-light">em</span> ist eine relative Größe zu der
            Schriftgröße des Parent-Objekts, heißt, wenn 16px die Schriftgröße des Parent-Objekts
            wäre, wäre 1em gleich 16px.
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            Und was ist <span class="text-italic text-weight-light">rem</span>, naja, es ist wie
            <span class="text-italic text-weight-light">em</span> nur relativ zum Root-Element,
            daher auch das r, cool oder? Heißt, wenn der Body 16px als Schriftgröße hat, ist 1rem
            gleich 16px!
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            Jetzt zu den coolen Einheiten aber!
            <span class="text-italic text-weight-light">%</span> gibt an, wie viel Prozent des
            Parent-Objektes eingenommen werden soll, klingt sehr logisch und simpel.
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            <span class="text-italic text-weight-light">vh</span> also, auch wenn wir das noch nicht
            so genau durchgegangen sind, der sichtbare und nutzbare Tab wird Viewport genannt, wie
            oben auch beim HTML Layout definiert.
            <span class="text-italic text-weight-light">1vh</span> ist daher
            <span class="text-italic text-weight-light">1%</span> der Höhe des aktuellen Viewports,
            das ändert sich natürlich, wenn man den Browser kleiner zieht.
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            Und was ist ein <span class="text-italic text-weight-light">vw</span>? Genau das
            Gleiche, wie vh, nur dass es sich auf die Breite des aktuellen Viewports bezieht, heißt,
            1vw ist 1% der Breite des Fensters!
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">So, Einheiten, check! Easy!</div>
          <hr />
          <div class="text text-h6 text-weight-regular q-my-md">
            <b>Nächste wichtige Info:</b>
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            <span class="text-italic text-weight-light">width</span> und
            <span class="text-italic text-weight-light">height</span> zwei sehr sehr wichtige
            Properties und auch sehr logische. Mit width kann man angeben, wie viel der vorhandenen
            Breite des Parent-Objektes ein Element einnehmen soll und mit height, geschieht das
            Gleiche nur auf die Höhe bezogen.
          </div>

          <div class="text text-h6 text-weight-regular q-my-md">Let’s keep the speedrun going!</div>
          <div class="text text-h6 text-weight-regular q-my-md">
            Also <span class="text-italic text-weight-light">background-color</span>, sehr cool und
            praktisch. Was das macht? Logisch, oder? Es gibt die Hintergrundfarbe eines Elementes
            an.
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            Erinnert ihr euch noch an die Grafik für Margin und Padding? Die Fläche bei “You” & die
            Fläche, welche durch das Padding entstehen, nehmen hierbei die Farbe des
            <span class="text-italic text-weight-light">background-color</span> an.
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            Wie gibt man das jetzt an? Genauso wie bei color also easy peasy!
          </div>
          <hr />
          <div class="text text-h6 text-weight-bold q-my-md">Flexbox:</div>
          <div class="text text-h6 text-weight-regular q-my-md">
            Sehr viel flexibler als dieser Kurs bietet Flexbox die Möglichkeit, dass sich Elemente
            fließend aufteilen und bewegen können.
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            Bei der Gelegenheit würde ich gleich gerne erwähnen, dass wir nicht alles von Flexbox
            hier benutzen werden und können!
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            Also ein kurzer Dive in das Thema! Es gibt das sogenannte
            <span class="text-italic text-weight-light">display</span> Property, welches angibt, wie
            ein Element Platz in seinem Parent-Objekt einnimmt.
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            Dabei gibt es drei Properties, welche wir uns in diesem Rahmen anschauen werden. Ja, ich
            weiß es gibt sonst noch sehr viele mehr, aber die interessieren uns gerade nicht, sorry.
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            <span class="text-italic text-weight-light">inline-block</span>: Ist wie ein
            <span class="text-italic text-weight-light">inline</span>
            Objekt, jaja ich hab noch nicht erklärt, was das überhaupt ist, nur dass man die Höhe
            und Breite manipulieren, also in CSS verändern kann. Einfach gesagt, ein inline-block
            und auch ein <span class="text-italic text-weight-light">inline</span> Element nehmen
            nur den Platz ein, welchen sie auch wirklich brauchen.
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            <span class="text-italic text-weight-light">block:</span> Ein block Element ist wie ein
            <span class="text-italic text-weight-light">inline</span> Element, nur dass es immer
            eine ganze Zeile einnimmt, also die Gesamtbreite des Parent-Objektes.
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            <span class="text-italic text-weight-light">flex:</span> Und was macht jetzt
            <span class="text-italic text-weight-light">flex</span>? Einfach gesagt, mit
            <span class="text-italic text-weight-light">flex</span> können wir Elemente in
            Parent-Objekten, welche diese Property haben, viel genauer und besser, bzw. dynamischer
            platzieren. Beispielsweise kann mit
            <span class="text-italic text-weight-light">flex</span> definiert werden, wann Elemente
            in die nächste Zeile überfließen, wie viel Platz sie einnehmen und wie sie innerhalb des
            Flex Objektes platziert werden sollen.
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            Das ganze ist jetzt eher schwer vorstellbar, darum eine kleine Grafik mit Beispiel-Code
            ^^
          </div>
          <div class="w-100 flex justify-center">
            <img src="lections/css/CSS_display_1.svg" class="q-my-lg image" />
          </div>
          <div class="text text-italic text-h6 text-weight-light q-my-md">
            .inline-block{ <br />display: inline-block; <br />}
          </div>
          <div class="text text-italic text-h6 text-weight-light q-my-md">
            .block{ <br />display: block; <br />}
          </div>
          <div class="text text-italic text-h6 text-weight-light q-my-md">
            .flex{ <br />display: flex; <br />}
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            Aber wie werden jetzt die Elemente in Flex unterschiedlich dargestellt? Naja, dafür gibt
            man den Elementen drinnen und manchmal dem Flex selber ein paar Properties.
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            Werden wir diese alle hier durchgehen? Nein, aber dafür hier ein kleiner
            <a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/">Cheat-Sheet</a>!
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            Zufrieden mit dem Einsteiger-Kurs? Wer weiß, aber das war es leider schon. Also ab ins
            CSS Rätseln und Recherchieren!
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            <a href="https://codepen.io/hochstegerL03/pen/GRXJXJx">Übung: Grundlagen von CSS</a>
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            <a href="https://codepen.io/hochstegerL03/pen/YzOXOqE">Lösung: Grundlagen von CSS</a>
          </div>
          <div class="text text-h6 text-weight-regular q-my-md">
            Tipp: Die letzte Übung mit der Flexbox kann ohne weitere Flex-Properties gemeistert
            werden. Nur <span class="text-italic text-weight-light">display: flex;</span> ist
            notwendig!
          </div>
          <hr class="q-my-lg" />
        </div>
        <!--Section 1 End-->

        <div class="text text-h6 text-weight-regular q-my-md">
          HTML gibt zwar die Struktur an und CSS lässt uns das ganze recht schön gestalten, jedoch
          ist nicht immer alles so schön statisch und einfältig, wie wir es der Einfachheitshalber
          gerne hätten.
        </div>
        <div class="text text-h6 text-weight-regular q-my-md">
          Und genau deshalb brauchen wir JavaScript. JavaScript ist - jetzt aber auch mal wirklich -
          die erste Programmiersprache, welche wir aktiv nutzen werden.
        </div>
        <div class="text text-h6 text-weight-regular q-my-md">
          Aber was kann JavaScript? JavaScript kann so einiges. Der beliebteste Use-Case wäre dabei
          das Event-Handling.
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
          Naja, nicht ganz, denn die Nutzung von Tags oder CSS-Klassen kommt von der Funktionalität
          recht nahe heran.
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
          Um es aber etwas einfacher hier zu halten, stellen wir nur kurz die 3 Arten von Variablen
          vor und unterscheiden zwischen Deklaration und Zuweisung von Werten.
        </div>
        <div class="text text-h6 text-weight-bold q-my-md">Let:</div>
        <div class="w-100 flex justify-center">
          <img src="lections/javascript/JavaScript_var_let_1.svg" class="q-my-lg image" />
        </div>
        <div class="text text-h6 text-weight-regular q-my-md">
          Let ist der moderne Bruder oder die moderne Schwester von Var. Keine Sorge, zu dieser Art
          der Deklaration kommen wir noch!
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
          <span class="text-italic text-weight-light">``</span> in der Deklaration angegeben werden
          müssen, Beispiel:
          <span class="text-italic text-weight-light">let string = “gewünschterWert”;</span>
        </div>
        <div class="text text-h6 text-weight-regular q-my-md">
          <b>Zahlen</b> (Integer oder Number / Numeric), hierbei ist eine Erklärung wahrscheinlich
          überflüssig, darum direkt zu den Beispielen:
          <span class="text-italic text-weight-light">let integer = 8;</span> oder
          <span class="text-italic text-weight-light">let number = 8.76;</span>
        </div>
        <div class="text text-h6 text-weight-regular q-my-md">
          <b>Boolean</b>, einfach gesagt “Richtig” oder “Falsch”, also zwei States, ähnlich wie bei
          der Binomialverteilung (YaY Mathe, we love it). Da wir aber im Englischen hier sind, heißt
          es <span class="text-italic text-weight-light">true</span> oder
          <span class="text-italic text-weight-light">false</span> (keine Anführungszeichen, da wir
          ja keinen String sondern einen Boolean übergeben wollen). Statt true oder false können
          auch
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
          Beispiele für Falsy Values, also Werte welche bei Bedingungen oder Umwandlung in boolesche
          Werte als <span class="text-italic text-weight-light">false</span> gesehen werden, wären:
          0, -0, 0n, null, undefined, NaN oder “”, also ein leerer String.
        </div>
        <div class="text text-h6 text-weight-regular q-my-md">
          Nun, es gibt jetzt auch noch die Datentypen
          <span class="text-italic text-weight-light">undefined</span>,
          <span class="text-italic text-weight-light">null</span>,
          <span class="text-italic text-weight-light">NaN</span> oder der Fall, in welchem wir einer
          Variable den Wert einer anderen oder einer vordefinierten Funktion, wie Variable
          übergeben, aber der Einfachheitshalber, behandeln wir diese hier erstmals weniger und sehr
          ungenau.
        </div>
        <div class="text text-h6 text-weight-regular q-my-md">
          Das einzige was zu wissen ist, ist das
          <span class="text-italic text-weight-light">null</span> und
          <span class="text-italic text-weight-light">undefined</span> beide dafür stehen, dass die
          Variable “leer” also undefiniert ist und
          <span class="text-italic text-weight-light">null</span> meistens gewünscht ist und
          <span class="text-italic text-weight-light">undefined</span> eher unabsichtlich oder
          automatisch (wie im Fall dieser Deklaration:
          <span class="text-italic text-weight-light">let var;</span> Es wurde kein Wert angegeben,
          also ist es automatisch nach JavaScript
          <span class="text-italic text-weight-light">undefined</span>).
        </div>
        <div class="text text-h6 text-weight-regular q-my-md">
          Bei der Übergabe von bereits existierenden Funktionen oder Variablen, werden diese einfach
          nach dem = geschrieben:
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
          Var kommt daher noch aus einer Zeit, wo Variable immer und überall gültig waren, also auch
          im Gültigkeitsbereich einer anderen, eingebundenen JavaScript Datei!
        </div>
        <div class="text text-h6 text-weight-regular q-my-md">
          Var sollte daher wirklich nur in ganz speziellen Situationen genutzt werden, ansonsten ist
          ein gut platziertes Let immer besser.
        </div>
        <div class="text text-h6 text-weight-regular q-my-md">
          Andere Unterschiede? Nope, das wars. Deklaration und alles andere ändern sich bis auf das
          Stichwort var anstatt von let nicht weiters.
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
          Alles was wir davor gemacht haben, bleibt eigentlich gleich, nur dass wir das let / const
          / var nun endlich auslassen können. Heißt, wir können das alles hier machen:
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
          schnell komisch, da <span class="text-italic text-weight-light">“2” + 2</span> auf einmal
          “22” ausgibt.
        </div>
        <div class="text text-h6 text-weight-regular q-my-md">
          Komisch, oder? Aber das ist zu kompliziert zu erklären. Einfach gesagt: Meistens wird der
          erste Wert bei einer + Verknüpfung als Referenz- oder Wunschwert genommen und der zweite
          diesem angepasst.
        </div>
        <hr />
        <div class="text text-h6 text-weight-bold q-my-md">Vergleichsoperatoren:</div>
        <div class="text text-h6 text-weight-regular q-my-md">
          Es ist zwar schön und gut, dass wir Werte in sogenannten Variablen speichern können,
          jedoch sollten wir auch in der Lage sein, Interaktionen logisch zu verbinden und Code, wie
          später auch Teile der Webseite, bedingt zu rendern, also anzuzeigen oder auszuführen.
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
          <b>!=</b>: Die beiden Werte sind ungleich, also unterschiedlich. Trifft nicht zu, wenn nur
          der Datentyp unterschiedlich ist.
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
          So. Jetzt wissen wir, welche Vergleichsoperatoren es gibt, aber wie setzen wir diese jetzt
          eigentlich ein? Ganz einfach. Vor und nach dem Operator kommt jeweils ein Wert, Beispiel:
        </div>
        <div class="text text-h6 text-weight-regular q-my-md">
          Ganz einfach. Vor und nach dem Operator kommt jeweils ein Wert, Beispiel:
          <span class="text-italic text-weight-light">2 > 3;</span> (hier würde natürlich jetzt
          <span class="text-italic text-weight-light">false</span> herauskommen), und tada, die zwei
          Werte werden verglichen und als Boolean behandelt.
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
          Mit dieser wird es uns erlaubt, Werte oder sonst was auf der Console (F12 im Browser oder
          auch auf Deutsch unter dem Wort KOMMANDOZEILE unter Windows zu finden) auszugeben.
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
          Apropos If-Bedingungen, oder auf Deutsch, Wenn-Bedingungen - ja ich weiß, dass keiner die
          so nennt - können genutzt werden, um dem Programm oder Browser zu sagen: “Hey, mach das
          nur wenn, danke, bitte!”.
        </div>
        <div class="text text-h6 text-weight-regular q-my-md">
          Jetzt wo wir wissen, was das ist, lasst es uns nutzen, um verschiedene Timmys auszugeben.
          Oh, und die Syntax erkläre ich jetzt nicht genauer, hehe. Die werdet ihr schon noch selber
          gleich sehen!
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
          Das <span class="text-italic text-weight-light">else</span> wird nur verwendet, wenn alle
          anderen Bedingungen nicht zugetroffen haben und steht für “alle anderen Möglichkeiten”,
          darum wird hier auch keine Bedingung benötigt. So, und wie kann man jetzt mehrere
          Bedingungen nacheinander machen?
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
          Sagen wir einmal, ich habe eine Array, also eine Liste von Objekten, Werte, whatever - ja
          wir haben das bis jetzt noch nicht gemacht, i knoooooow - und wollen jeden einzelnen Wert
          alleine ausgeben. Dafür gibt es jetzt Schleifen.
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
          brauchen? Naja, wenn man zu faul ist, eine While-Schleife mit einem hochzählenden Prozess
          (Variable und Wertzuweisung/Erhöhung) zu modifizieren, bietet eine For-Schleife schon
          alles, was man braucht.
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
          Weil wir cool sind und die Zahl 0 aus Liebe zu unserem Computer mögen, beginnen wir, wenn
          es ums Programmieren geht, meistens mit der Zahl 0 beim Zählen, heißt unser erstes Objekt
          in der Array nennen wir das 0-te Objekt.
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
          dieses -1 für? Naja, array.length gibt uns irgendwie passend auch, die Länge der Array an,
          also wie viele Elemente diese beinhaltet und das -1 ist dafür da, dass wir ja mit 0
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
          welche im Scope der For-Schleife gültig ist und gibt ihr einen Anfangswert von 0 (man kann
          natürlich auch was anderes nehmen).
        </div>
        <div class="text text-h6 text-weight-regular q-my-md">
          <span class="text-italic text-weight-light">i &lt; array.length;</span> Ist unsere
          Bedingung, solange diese erfüllt wird, wiederholt sich unser Code-Abschnitt innerhalb der
          For-Schleife.
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
          welche beim Aufruf einen gewünschten Wert annehmen und dann in der Funktion genutzt werden
          können.
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
          <span class="text-italic text-weight-light">const</span> unsere Art, JavaScript zu sagen,
          dass wir eine Funktion deklarieren wollen.
        </div>
        <div class="text text-h6 text-weight-regular q-my-md">
          <span class="text-italic text-weight-light">eineFunktion</span> ist wie wir die Funktion
          nennen wollen und zahl1, zahl2 sind unsere Parameter.
        </div>
        <div class="text text-h6 text-weight-regular q-my-md">
          Mit <span class="text-italic text-weight-light">return</span> geben wir einen Wert zurück,
          welcher dann im z.B. console.log() genutzt wird. Bei unserem Beispiel würde jetzt 12 in
          der Konsole ausgegeben werden.
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
      <!--Body/Text End-->
    </div>
    <!--Part 2: Notes End-->
    <!--Part 3: Questions-->
    <div id="questions" class="flex justify-center">
      <!--Body/Text-->
      <div class="ets-w-80">
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
              class="text-center ets-fake-button text-secondary ets-header text-h5 text-weight-bold"
              @click="trySub()"
            >
              Check
            </div>
            <div
              class="text-center ets-header text-grey text-caption text-italic text-weight-light"
            >
              <span v-if="falseQ.length > 0">{{ falseQ.length }} Error/s found.</span>
              <span v-else>0 Errors found.</span>
              <span class="ets-underline">click here!</span>
            </div>
          </div>
          <div class="col-6 text-center ets-header text-h6 text-weight-bold">
            <div class="text-center text-secondary ets-header text-h5 text-weight-bold">
              Go Next!
            </div>
            <div
              class="text-center ets-header text-grey text-caption text-italic text-weight-light"
            >
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
