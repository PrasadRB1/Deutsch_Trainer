// Additional grammar topics [title, rule, memory hint] appended to each level (8 per level in total).
const EXTRA={
A1:[
['Pronouns & possessives','ich/mein, du/dein, er/sein, sie/ihr, wir/unser, ihr/euer, Sie/Ihr. Possessives take the endings of ein/kein: meine Mutter, meinen Bruder.','Possessive = who owns it; the ending = the gender and case of the noun owned.'],
['Plural of nouns','Patterns: -e (Tag–Tage), -er (Kind–Kinder), -n/-en (Frau–Frauen), -s (Auto–Autos), umlaut (Mutter–Mütter), no change (Lehrer).','Always learn the plural with the noun: das Kind, die Kinder.'],
['Separable verbs','aufstehen → Ich stehe um sieben Uhr auf. The prefix goes to the end of the main clause.','Stress falls on the separable prefix: AUF-stehen, EIN-kaufen.'],
['Time & prepositions','um 8 Uhr, am Montag, im Juli, von … bis, vor/nach dem Essen.','um = clock time, am = day/part of day, im = month/season.']],
A2:[
['Adjective endings (basic)','After der/die/das: -e (Nom. sg., Akk. f/n), otherwise -en. After ein: the ending shows gender where ein does not: ein großer Hund, eine große Katze.','Look at the article: if it shows gender and case, the adjective takes -e/-en.'],
['Comparative & superlative','schnell – schneller – am schnellsten; irregular: gut – besser – am besten; viel – mehr – am meisten.','Comparison with als; equality with so … wie.'],
['Reflexive verbs','ich wasche mich, du wäschst dich, er freut sich. Common: sich treffen, sich interessieren, sich erinnern.','Reflexive pronouns: mich/dich/sich/uns/euch/sich (accusative).'],
['Two-way prepositions','in, an, auf, über, unter, vor, hinter, neben, zwischen: wo? + Dativ, wohin? + Akkusativ.','Ich bin im Park (stay) / Ich gehe in den Park (movement).']],
B1:[
['Adjective declension','Three patterns: after definite article (-e/-en), after ein-words (-er/-e/-es in Nom.), without article (endings of the definite article).','Memorise the three tables once, then ask: which pattern, which gender and case?'],
['Infinitive with zu','Ich versuche, pünktlich zu kommen. um … zu = purpose: Ich lerne, um zu bestehen. damit when the subjects differ.','Separable verbs insert zu: aufzustehen.'],
['als / wenn / ob','als = one single event in the past; wenn = repeated or present/future; ob = indirect yes/no question.','Als ich klein war … / Wenn ich Zeit habe …'],
['Verbs with prepositions','warten auf + Akk, sich interessieren für + Akk, denken an + Akk, Angst haben vor + Dat. da-/wo-: Worauf wartest du? Darauf.','Learn the verb together with its preposition and case.']],
B2:[
['Passive with modals; Zustandspassiv','Das muss repariert werden. Result state: Das Fenster ist geöffnet.','Vorgangspassiv = process (wird geöffnet), Zustandspassiv = result (ist geöffnet).'],
['Futur I/II & probability','Er wird wohl krank sein (guess). Er wird das bis morgen erledigt haben.','Futur often expresses assumption, not just future time.'],
['Genitive prepositions','während, wegen, trotz, innerhalb, außerhalb, anhand, aufgrund + Genitiv.','In speech wegen/trotz + dative occurs, but in exams use the genitive.'],
['Relative clauses (advanced)','With prepositions: das Thema, über das wir sprechen. With was/wo: alles, was ich weiß; der Ort, wo wir uns trafen.','was after alles, nichts, etwas, das Beste.']],
C1:[
['Nominalisation & verbalisation','Durch die Erhöhung der Preise … = Weil die Preise erhöht wurden … Academic and news style prefers nouns.','Practise converting a sentence into nominal style and back.'],
['Extended participial phrases','die von der Regierung beschlossenen Maßnahmen = die Maßnahmen, die die Regierung beschlossen hat.','Find the noun at the end, then unpack everything before it as a relative clause.'],
['als ob + Konjunktiv','Er tut, als ob er schliefe / als würde er schlafen. Also: als + verb in position 2.','The unreal comparison uses Konjunktiv II (or I in formal reports).'],
['Sentence field model','Vorfeld – linke Satzklammer – Mittelfeld – rechte Satzklammer – Nachfeld. Emphasis: Gestern habe ich ihn gesehen.','Time–Cause–Manner–Place (TeKaMoLo) order in the Mittelfeld.']],
C2:[
['Discourse markers','zwar … aber, immerhin, gleichwohl, mithin, insofern … als, geschweige denn.','They signal concession, consequence or limitation in argumentation.'],
['Literary & formal forms','Genitive objects: Er gedachte der Toten. Konjunktiv II forms: ich wüsste, er gäbe, wir hülfen.','Recognise them when reading; use sparingly in writing.'],
['Word formation','Compounds with Fugen-s (Arbeitsplatz), suffixes -ung, -heit, -keit, -bar, -lich, prefixes un-, miss-, ur-.','The last part of a compound gives the gender.'],
['Regional variants','Austria and Switzerland: Jänner, Sackerl, Perfekt in speech; Swiss writing uses ss instead of ß.','Standard German is accepted in exams, but recognise variants in listening.']]};
Object.keys(EXTRA).forEach(l=>D[l].g.push(...EXTRA[l]));
