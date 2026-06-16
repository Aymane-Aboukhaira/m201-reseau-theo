addM205Sections([
S(27, 's27', 'Cheval de Troie', 'cheval de troie',
  def('Programme qui semble légitime mais cache une fonction malveillante.')+
  h3('Objectif')+
  ul(['Ouvrir une porte dérobée.','Voler des données.','Installer d’autres malwares.','Permettre un accès distant.'])+
  h3('Exemple de question EFF')+
  p('Définir la confidentialité des données et un cheval de Troie.')
),
S(28, 's28', 'Ransomware', 'ransomware',
  def('Malware qui chiffre ou bloque les données puis demande une rançon.')+
  h3('Fonctionnement')+
  ul(['Infection.','Chiffrement des fichiers.','Affichage d’une demande de rançon.','Paiement exigé souvent en cryptomonnaie.'])+
  h3('Ransomwares récents')+
  ul(['Utilisent souvent chiffrement fort.','Peuvent combiner chiffrement + exfiltration.','Menacent de publier les données.'])+
  h3('RSA-4096 dans un scénario de ransomware')+
  ul(['RSA-4096 est un chiffrement asymétrique fort.','La clé publique peut chiffrer.','La clé privée est nécessaire pour déchiffrer.','Sans clé privée, le déchiffrement est très difficile.'])+
  h3('Mesures de réduction d’impact')+
  ul(['Sauvegardes régulières.','Sauvegardes hors ligne.','Tests de restauration.','Antivirus/EDR.','Mise à jour des systèmes.','Restriction des droits.','Segmentation réseau.','Sensibilisation utilisateurs.'])
),
S(29, 's29', 'Rootkit', 'rootkit',
  def('Malware conçu pour cacher sa présence et maintenir un accès privilégié.')+
  h3('Objectif')+
  ul(['Masquer fichiers, processus ou connexions.','Maintenir une persistance.','Donner un contrôle profond au système.'])+
  h3('Danger')+
  ul(['Très difficile à détecter.','Peut manipuler le système d’exploitation.'])
),
S(30, 's30', 'Spyware et variantes', 'spyware et variantes',
  h3('Spyware')+
  p('Logiciel espion collectant des informations sans consentement.')+
  h3('Keylogger')+
  ul(['Enregistre les frappes clavier.','Peut voler mots de passe et identifiants.'])+
  h3('Hijacker / BHO')+
  ul(['Détourne le navigateur.','Modifie page d’accueil, recherches ou redirections.'])+
  h3('Stealware')+
  p('Vole des données sensibles.')+
  h3('Scumware')+
  p('Logiciel douteux ou indésirable.')+
  h3('Wabbity / Fork Bomb')+
  p('Épuise les ressources système par réplication ou création excessive de processus.')
),
S(31, 's31', 'Buffer Overflow', 'buffer overflow',
  def('Buffer Overflow est une attaque exploitant un dépassement de mémoire tampon.')+
  h3('Fonctionnement')+
  ul(['Un programme reçoit plus de données que prévu.','La mémoire adjacente est écrasée.','L’attaquant peut provoquer un crash ou exécuter du code.'])+
  h3('Impact')+
  ul(['Crash applicatif.','Exécution de code.','Élévation de privilèges.','Compromission système.'])+
  h3('Solutions')+
  ul(['Validation des entrées.','Mises à jour.','Protection mémoire.','ASLR.','DEP.','Langages sûrs.','IPS/WAF selon contexte.'])
),
S(32, 's32', 'Man-in-the-Middle', 'man-in-the-middle',
  def('MITM est une attaque où l’attaquant s’interpose entre deux parties.')+
  h3('Objectif')+
  ul(['Lire le trafic.','Modifier le trafic.','Voler des identifiants.','Rediriger les communications.'])+
  h3('Causes fréquentes')+
  ul(['ARP Spoofing.','DHCP Spoofing.','Evil Twin Wi-Fi.','Certificat frauduleux.','Réseau non chiffré.'])+
  h3('Solutions')+
  ul(['HTTPS.','VPN.','Certificats valides.','DAI.','DHCP Snooping.','802.1X.','WPA2/WPA3 Enterprise.'])
),
S(33, 's33', 'Ingénierie sociale', 'ingénierie sociale',
  def('Technique qui manipule l’humain pour obtenir une action ou une information.')+
  h3('Exemples')+
  ul(['Phishing.','Prétexte téléphonique.','Fausse urgence.','Faux support technique.','Usurpation d’identité.','Pièce jointe piégée.'])+
  h3('Protection')+
  ul(['Sensibilisation.','MFA.','Vérification des demandes.','Filtrage e-mail.','Charte informatique.','Procédures internes.'])
),
S(34, 's34', 'Phishing', 'phishing',
  def('Attaque qui imite un service légitime pour voler des informations.')+
  h3('Cibles')+
  ul(['Mots de passe.','Codes bancaires.','Identifiants cloud.','Données personnelles.'])+
  h3('Signes')+
  ul(['Lien suspect.','Fausse urgence.','Expéditeur douteux.','Fautes.','Pièce jointe inattendue.'])+
  h3('Protections')+
  ul(['Formation.','MFA.','Antispam.','SEG.','Vérification URL.','Signalement des emails suspects.'])
),
S(35, 's35', 'Étapes d’une cyberattaque réussie', 'étapes d’une cyberattaque réussie',
  h3('1. Reconnaissance')+
  p('Collecte d’informations sur la cible.')+
  h4('Exemples')+
  ul(['Domaines.','IP.','Employés.','Technologies.','Réseaux sociaux.','Services exposés.'])+
  h3('2. Préparation / Weaponization')+
  p('Préparation de l’outil d’attaque.')+
  h4('Exemples')+
  ul(['Malware.','Exploit.','Document piégé.','Lien malveillant.'])+
  h3('3. Livraison')+
  p('Transmission de l’attaque à la victime.')+
  h4('Exemples')+
  ul(['Email.','USB.','Site web.','Service exposé.'])+
  h3('4. Exploitation')+
  p('Exploitation d’une vulnérabilité.')+
  h4('Exemples')+
  ul(['Faille logicielle.','Mot de passe faible.','Erreur humaine.','Mauvaise configuration.'])+
  h3('5. Installation / Persistance')+
  p('Installation d’un malware ou accès durable.')+
  h4('Exemples')+
  ul(['Backdoor.','Rootkit.','Service caché.','Compte créé.'])+
  h3('6. Command and Control')+
  p('Communication avec l’attaquant.')+
  h4('Rôle')+
  ul(['Recevoir des commandes.','Télécharger des outils.','Maintenir le contrôle.'])+
  h3('7. Actions sur objectifs')+
  ul(['Vol de données.','Exfiltration.','Chiffrement.','Sabotage.','Obfuscation.','Effacement des traces.'])+
  h3('Élévation de privilèges')+
  ul(['Permet d’obtenir plus de droits.','Objectif : passer d’un compte simple à administrateur.'])+
  h3('Exfiltration')+
  p('Sortie non autorisée des données hors du SI.')+
  h3('Obfuscation')+
  p('Cacher l’attaque, les traces ou le code malveillant.')
),
S(36, 's36', 'Sécurisation des postes de travail', 'sécurisation des postes de travail',
  h3('Bonnes pratiques générales')+
  ul(['Mettre à jour le système.','Mettre à jour les applications.','Installer et maintenir un antivirus.','Activer le pare-feu local.','Utiliser des mots de passe forts.','Activer MFA si possible.','Limiter les droits administrateur.','Verrouiller la session.','Sauvegarder régulièrement.','Éviter les sites illicites.','Ne pas ouvrir les pièces jointes suspectes.'])+
  h3('Poste Windows')+
  ul(['Activer Windows Defender ou antivirus.','Activer le pare-feu.','Appliquer les mises à jour.','Utiliser BitLocker si nécessaire.','Restreindre l’exécution de scripts.','Surveiller les comptes administrateurs.'])+
  h3('Poste Linux')+
  ul(['Mettre à jour les paquets.','Désactiver les services inutiles.','Utiliser sudo au lieu de root direct.','Configurer le pare-feu.','Utiliser SSH sécurisé.','Désactiver l’accès root SSH.','Utiliser des permissions correctes.','Installer Fail2ban si service exposé.'])+
  h3('Formation utilisateurs')+
  ul(['Réduit les erreurs humaines.','Aide à détecter phishing et pièces jointes suspectes.','Améliore le respect des procédures.'])+
  h3('Charte informatique')+
  ul(['Définit les règles d’usage.','Responsabilise les utilisateurs.','Encadre les accès, mots de passe, données et Internet.'])+
  h3('Sauvegardes')+
  ul(['Doivent être régulières.','Doivent être testées.','Doivent être protégées.','Doivent inclure une copie hors ligne ou isolée.'])
),
S(37, 's37', 'Composantes d’une infrastructure de sécurité', 'composantes d’une infrastructure de sécurité',
  h3('Antivirus')+
  ul(['Détecte, neutralise et éradique les malwares.','Rôle préventif et curatif.'])+
  h3('Pare-feu')+
  ul(['Filtre le trafic entre réseaux.','Utilise des règles allow / deny / drop.','Protège entre réseau interne et externe.'])+
  h3('Proxy')+
  ul(['Intermédiaire entre utilisateur et Internet.','Contrôle les accès web.','Cache les requêtes.','Peut anonymiser ou journaliser.'])+
  h3('IDS')+
  ul(['Intrusion Detection System.','Surveille et détecte les intrusions.','Passif.','Ne bloque pas directement.'])+
  h3('IPS')+
  ul(['Intrusion Prevention System.','Inspecte et bloque les attaques.','Actif.','Peut bloquer selon signature ou contenu.'])+
  h3('UTM')+
  ul(['Unified Threat Management.','Solution tout-en-un.'])+
  h4('Intègre')+
  ul(['Pare-feu.','Antivirus.','Anti-spam.','IDS/IPS.','Filtrage URL.'])+
  h3('SIEM')+
  ul(['Security Information and Event Management.','Centralise et corrèle les événements de sécurité.'])+
  h4('Rôle')+
  ul(['Collecte logs.','Corrèle les alertes.','Aide à détecter incidents.','Facilite audit.'])+
  h3('SOAR')+
  p('Automatise la réponse aux incidents.')+
  h3('UEBA')+
  ul(['Analyse le comportement des utilisateurs et entités.','Détecte les comportements anormaux.'])+
  h3('DLP')+
  ul(['Data Loss Prevention.','Empêche la fuite de données sensibles.'])+
  h4('Exemples')+
  ul(['Cartes bancaires.','Identifiants.','Données clients.','Documents confidentiels.'])+
  h3('SEG')+
  ul(['Secure Email Gateway.','Inspecte les emails avant les serveurs de messagerie.','Filtre spam, phishing et malwares.'])
),
S(38, 's38', 'Pare-feu', 'pare-feu',
  def('Un pare-feu filtre le trafic réseau selon des règles de sécurité.')+
  h3('Rôle')+
  ul(['Autoriser.','Bloquer.','Journaliser.','Séparer les zones.','Réduire la surface d’attaque.'])+
  h3('Règles')+
  ul(['Allow.','Deny.','Drop.'])+
  h3('Politique moindre privilège')+
  ul(['On autorise uniquement ce qui est explicitement permis.','C’est la politique la plus sûre.'])+
  h3('Politique liste noire')+
  ul(['On bloque ce qui est explicitement interdit.','Moins restrictive.','Moins sûre.'])+
  h3('Pare-feu personnel')+
  p('Protège uniquement la machine sur laquelle il est installé.')
),
S(39, 's39', 'Types de pare-feux', 'types de pare-feux',
  h3('Stateless Firewall')+
  ul(['Filtre paquet par paquet.','Ne garde pas l’état des connexions.','Décision basée sur IP, port, protocole.'])+
  h4('Avantage')+
  ul(['Simple.','Rapide.'])+
  h4('Limite')+
  ul(['Moins intelligent.','Ne comprend pas le contexte de session.'])+
  h3('Stateful Firewall')+
  ul(['Suit l’état des connexions.','Comprend si un paquet appartient à une session valide.'])+
  h4('Avantage')+
  ul(['Plus sécurisé.','Plus intelligent.'])+
  h4('Exemple')+
  p('Autoriser automatiquement le trafic retour d’une connexion établie.')+
  h3('Proxy Firewall')+
  ul(['Intermédiaire applicatif.','Le client parle au proxy.','Le proxy parle à Internet.'])+
  h4('Avantages')+
  ul(['Contrôle applicatif.','Cache.','Filtrage URL.','Masquage client.'])+
  h3('NGFW')+
  ul(['Next Generation Firewall.','Pare-feu nouvelle génération.'])+
  h4('Fonctions')+
  ul(['Stateful firewall.','Inspection applicative.','Filtrage par utilisateur.','IPS.','Contrôle URL.','Inspection avancée.'])+
  piege(['Firewall filtre surtout IP/port/session.','IPS filtre selon contenu et signatures.','NGFW combine plusieurs fonctions.','---'])
),
]);
