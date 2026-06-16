addSections([
S(1,'s1','Introduction réseau','réseau définition PAN LAN MAN WAN intranet extranet internet classification',
  def("Un réseau est un ensemble de moyens matériels et logiciels mis en œuvre pour assurer la communication entre : ordinateurs ; stations de travail ; terminaux informatiques ; serveurs ; équipements réseau ; applications ; services.")+
  h3('Idée centrale')+ul(["Un réseau sert à : connecter ; partager ; communiquer ; segmenter ; router ; sécuriser ; superviser."])+
  h3('Classification géographique')+
  tbl(['Type','Nom','Portée','Exemples'],[
    ['<strong>PAN</strong>','Personal Area Network','Très courte portée','Bluetooth ; Wi-Fi personnel ; partage entre téléphone, casque, montre, PC'],
    ['<strong>LAN</strong>','Local Area Network','Maison, salle, bâtiment, entreprise (~10 à 100 m)','Réseau d\'entreprise'],
    ['<strong>MAN</strong>','Metropolitan Area Network','Ville, grande zone urbaine','Relie plusieurs LAN dans la même région'],
    ['<strong>WAN</strong>','Wide Area Network','Pays, continent, plusieurs sites distants','Relie des LAN géographiquement éloignés ; siège et agences']
  ])+
  h3('Classification fonctionnelle')+
  tbl(['Type','Description'],[
    ['<strong>Réseau privé</strong>','Réseau interne. Non accessible directement depuis l\'extérieur. Utilisé dans une organisation.'],
    ['<strong>Intranet</strong>','Réseau privé interne. Accessible seulement aux utilisateurs autorisés. Utilisé pour les services internes.'],
    ['<strong>Extranet</strong>','Extension contrôlée de l\'intranet. Permet de connecter des partenaires externes. Accès limité et sécurisé.'],
    ['<strong>Internet</strong>','Réseau public mondial. Accessible à tous. Infrastructure partagée.']
  ])
),

S(2,'s2','Topologies réseau','topologie point-à-point bus anneau étoile maillée hybride collision',
  tbl(['Topologie','Description','Avantage','Inconvénient'],[
    ['<strong>Point-à-point</strong>','Connexion directe entre deux équipements','Connexion simple et rapide','—'],
    ['<strong>Linéaire</strong>','Équipements connectés les uns à la suite des autres','Simple. Coût réduit.','La défaillance d\'un équipement peut couper la chaîne.'],
    ['<strong>Bus</strong>','Tous les équipements partagent le même support','Peu coûteux. Facile à mettre en œuvre.','Risque de collisions lorsque plusieurs équipements émettent en même temps.'],
    ['<strong>Anneau</strong>','Les équipements sont connectés en boucle. Données circulent dans un seul sens.','Permet de connecter des équipements sur une grande distance.','Une coupure peut perturber la communication.'],
    ['<strong>Étoile</strong>','Tous les équipements sont connectés à un équipement central. Très utilisée dans les LAN modernes.','L\'équipement central coordonne le trafic. La panne d\'un câble affecte seulement un équipement.','La défaillance de l\'équipement central peut interrompre le réseau.'],
    ['<strong>Maillée</strong>','Chaque équipement peut être interconnecté avec plusieurs autres. Types : complet / partiel.','Pas de point de défaillance unique.','Coût élevé avec l\'augmentation du nombre d\'équipements.'],
    ['<strong>Hybride</strong>','Combine plusieurs topologies.','Profite des avantages de chaque modèle. Limite les inconvénients.','—']
  ])+
  def("<strong>Collision :</strong> Une collision est une perte ou perturbation de données qui se produit lorsque deux équipements émettent en même temps sur le même support.")
),

S(3,'s3','Modèle OSI','OSI couche application présentation session transport réseau liaison physique encapsulation décapsulation',
  def("Le modèle OSI, Open Systems Interconnection, est un modèle de référence créé par l'ISO pour standardiser les communications réseau.")+
  h3('Objectifs')+ul(["Faciliter la conception réseau.","Simplifier le dépannage.","Standardiser les communications.","Séparer les fonctions réseau en couches.","Comprendre où se situe une panne."])+
  h3('Les 7 couches OSI')+
  tbl(['#','Couche','Mémo rapide'],[
    ['7','Application','→ utilisateur'],['6','Présentation','→ format'],['5','Session','→ dialogue'],
    ['4','Transport','→ ports et fiabilité'],['3','Réseau','→ IP et routage'],['2','Liaison de données','→ MAC et trames'],['1','Physique','→ bits et câbles']
  ])+
  h3('Encapsulation')+p("L'encapsulation est l'ajout d'informations de contrôle aux données venant de la couche supérieure. Chaque couche ajoute son en-tête. Le résultat final est transmis sur le support physique.")+
  h3('Décapsulation')+p("La décapsulation consiste à retirer les informations ajoutées par les couches précédentes pour récupérer les données utilisables par la couche concernée.")
),

S(4,'s4','Couches OSI détaillées','couche application HTTP FTP SMTP DNS présentation cryptage session transport TCP UDP réseau IPv4 IPv6 ICMP liaison MAC LLC physique bits câbles',
  h3('7. Couche Application')+p("Point d'accès aux services réseau. Permet à l'utilisateur : d'ouvrir un site web ; d'envoyer un e-mail ; de télécharger des fichiers ; d'utiliser DNS ; d'utiliser une application réseau.")+sub('Protocoles cités',['HTTP.','FTP.','SMTP.','DNS.'])+
  h3('6. Couche Présentation')+p("Prépare les données. Assure la compatibilité entre systèmes.")+sub('Fonctions',['Cryptage.','Encodage.','Compression.','Conversion de formats.'])+
  h3('5. Couche Session')+ul(["Établit la communication.","Maintient la communication.","Synchronise les échanges.","Peut gérer plusieurs flux en même temps."])+
  h3('4. Couche Transport')+p("Assure le transport des données de bout en bout.")+sub('Fonctions',['Segmentation.','Réassemblage.','Contrôle de flux.','Contrôle des erreurs.','Ajout du numéro de port.','Multiplexage des applications.'])+
  tbl(['','TCP','UDP'],[
    ['Mode','Connecté','Non connecté'],['Fiabilité','Fiable, accusés de réception','Pas de garantie de livraison'],['Vitesse','Plus lent mais sûr','Rapide'],['Usage','—','Voix, vidéo, DNS, DHCP']
  ])+
  h3('3. Couche Réseau')+p("Construit une voie de communication de bout en bout. Utilise l'adressage logique IP. Unité de données : paquet.")+sub('Fonctions',['Routage.','Fragmentation.','Choix du meilleur chemin.','Adressage logique.'])+sub('Protocoles cités',['IPv4.','IPv6.','ICMP.'])+
  h3('2. Couche Liaison de données')+p("Communication entre équipements du même segment LAN. Crée les trames Ethernet. Utilise les adresses MAC.")+sub('Sous-couches',['LLC : contrôle logique, identification des protocoles, correction/contrôle.','MAC : accès au média, adressage physique MAC.'])+
  h3('1. Couche Physique')+p("Transmission réelle des bits. Transforme les données en signaux.")+sub('Éléments',['Câbles.','Débit.','Hubs.','Connecteurs.','Signaux électriques.','Signaux optiques.','Ondes radio.'])
),

S(5,'s5','Protocoles mail cités','POP IMAP SMTP mail ports 995 993',
  tbl(['Protocole','Rôle','Port sécurisé'],[
    ['<strong>POP</strong>','Sert à récupérer les e-mails. Télécharge souvent les messages localement.','995'],
    ['<strong>IMAP</strong>','Synchronise les e-mails avec le serveur. Permet de garder les messages sur le serveur.','993'],
    ['<strong>SMTP</strong>','Sert à envoyer les e-mails. Fonctionne au niveau application.','—']
  ])
),

S(6,'s6','Adresse MAC','MAC NIC OUI adresse physique couche 2 48 bits',
  def("L'adresse MAC est une adresse physique unique attribuée à chaque carte réseau, appelée NIC. Elle identifie un équipement dans un réseau local.")+
  p("Couche : Couche 2. Liaison de données.")+
  h3('Structure')+ul(["48 bits.","6 octets.","24 bits : OUI, identifiant constructeur.","24 bits : identifiant unique de la carte."])+
  h3('Rôle')+ul(["Identifier une carte réseau.","Permettre la commutation locale.","Alimenter la table MAC du switch."])+
  h3('Différence MAC / IP')+
  tbl(['','MAC','IP'],[
    ['Type','Adresse physique','Adresse logique'],['Couche','Couche 2','Couche 3'],['Utilisation','Utilisée dans le LAN','Utilisée pour identifier et router entre réseaux'],['Changement','Ne change normalement pas selon le réseau','Peut changer selon le réseau']
  ])
),

S(7,'s7','Adressage IPv4','IPv4 32 bits classe A B C D privé public NAT loopback 127',
  def("IPv4 est un protocole d'adressage de couche 3 utilisant des adresses de 32 bits.")+
  h3('Plages privées')+ul(["10.0.0.0/8.","172.16.0.0/12.","192.168.0.0/16."])+
  h3('Classes IPv4')+
  tbl(['Classe','Plage','Masque par défaut'],[
    ['A','0 à 126','/8'],['B','128 à 191','/16'],['C','192 à 223','/24'],['D','224 à 239','Multidiffusion']
  ])+
  h3('Adresse de bouclage')+p("127.0.0.0/8. Utilisée comme adresse de loopback. Permet de tester la pile TCP/IP locale.")+
  h3('Adresse publique')+p("Routable sur Internet. Attribuée par un fournisseur ou une autorité.")+
  h3('Adresse privée')+p("Utilisée dans les réseaux internes. Non routable directement sur Internet. Nécessite NAT/PAT pour sortir vers Internet.")
),

S(8,'s8','Adressage IPv6','IPv6 128 bits hexadécimal GUA link-local loopback SLAAC compression',
  def("IPv6 est la nouvelle génération du protocole IP. Il a été conçu pour remplacer IPv4.")+
  h3('Raisons du passage à IPv6')+ul(["Croissance d'Internet.","Manque d'adresses IPv4.","Passage de 32 bits à 128 bits.","En-tête simplifié.","Traitement plus efficace.","Qualité de service intégrée.","RFC 2460 mentionnée dans les notes."])+
  h3('Structure')+p("Adresse de 128 bits. Écrite en hexadécimal. Découpée en blocs séparés par :.")+p("Exemple visible : 2001:0DB8::/64.")+p("Parties : Préfixe de routage global. ID de sous-réseau. ID d'interface.")+p("Autre exemple visible : 0129:00AB:CAFE:0F1E/64.")+
  h3('Compression IPv6')+ul(["00AB devient AB.","0000 devient 0.","Une suite de zéros peut être remplacée par ::.",":: ne peut être utilisé qu'une seule fois dans une adresse."])+
  h3('Types d\'adresses IPv6')+
  tbl(['Préfixe','Type','Description'],[
    ['::1/128','Loopback','Permet à l\'équipement de communiquer avec lui-même.'],
    ['FE80 à FEBF (FE80::/10)','Link-local','Identifie un hôte sur le lien local. Non routable sur Internet. Obligatoire sur les interfaces IPv6. Utilisée par OSPFv3, SLAAC et Neighbor Discovery.'],
    ['FC00 à FCFF','Locale unique','Équivalent logique d\'une adresse privée. Utilisée dans un réseau spécifique.'],
    ['FF00 à FFFF','Multidiffusion','Communication de groupe.'],
    ['2000 à 3FFF','Globale (GUA)','Adresse publique IPv6. Routable sur Internet. Global Unicast Address.']
  ])
),

S(9,'s9','Commutateur / Switch','commutateur switch couche 2 MAC table CAM apprentissage boot IOS',
  def("Un commutateur est un équipement de couche 2 qui relie plusieurs appareils dans un même réseau local.")+
  h3('Rôles')+ul(["Relier les équipements du LAN.","Améliorer les performances.","Réduire les collisions.","Apprendre les adresses MAC.","Transmettre les trames selon les adresses MAC.","Créer un domaine de collision par port.","Conserver le même domaine de diffusion sauf séparation par VLAN."])+
  h3('Apprentissage MAC')+ul(["Le switch lit l'adresse MAC source.","Il associe cette MAC au port d'entrée.","Il ajoute l'information dans sa table MAC/CAM.","Il utilise ensuite cette table pour transférer les trames."])+
  h3('Table MAC')+p("Mémoire utilisée pour stocker : adresse MAC ; numéro VLAN ; port associé.")+
  h3('Timer MAC')+p("Une entrée dynamique reste temporairement dans la table. Si la MAC n'est plus vue, l'entrée expire.")+
  h3('Séquence de démarrage d\'un switch')+ul(["POST : test des composants matériels.","Boot loader : lancement du système.","Initialisation CPU bas niveau.","Initialisation de la mémoire flash.","Chargement de l'image IOS.","Chargement du fichier startup-config.","Application de la configuration de démarrage."])+
  h3('Startup-config')+p("Fichier de configuration de démarrage. Souvent stocké dans config.text. Chargé au démarrage.")+
  h3('Boot loader')+p("Permet de récupérer un switch si IOS absent ou corrompu. Permet aussi certaines opérations de dépannage.")
),

S(10,'s10','Modes duplex et Auto-MDIX','half-duplex full-duplex Auto-MDIX collision CRC',
  tbl(['Mode','Description'],[
    ['<strong>Half-duplex</strong>','L\'équipement peut émettre ou recevoir. Il ne peut pas faire les deux en même temps. Collisions possibles.'],
    ['<strong>Full-duplex</strong>','L\'équipement peut émettre et recevoir en même temps. Pas de collisions sur le lien. Meilleure performance.']
  ])+
  h3('Auto-MDIX')+ul(["Détecte automatiquement le type de câble.","Permet d'utiliser câble droit ou croisé.","Nécessite généralement vitesse et duplex en auto."])+
  h3('Erreurs possibles')+ul(["Mauvais duplex.","Mauvaise vitesse.","Collisions tardives.","CRC.","Trames trop petites.","Trames trop grandes."])
),

S(11,'s11','Trame Ethernet','trame Ethernet MAC EtherType FCS CRC payload ingress egress',
  h3('Structure d\'une trame')+ul(["MAC destination.","MAC source.","EtherType.","Payload / données.","FCS."])+
  h3('EtherType')+p("Indique le protocole transporté.")+sub('Exemples',['IPv4.','IPv6.','ARP.','802.1Q.'])+
  h3('FCS')+p("Frame Check Sequence. Permet de détecter les erreurs. Utilise un contrôle de type CRC.")+
  h3('Ports de transmission')+
  tbl(['Port','Description'],[
    ['<strong>Ingress port</strong>','Port d\'entrée. Interface par laquelle la trame arrive.'],
    ['<strong>Egress port</strong>','Port de sortie. Interface par laquelle le switch transmet la trame.']
  ])
),

S(12,'s12','Méthodes de transmission des trames','flooding forwarding filtering broadcast unknown unicast',
  tbl(['Méthode','Description'],[
    ['<strong>Flooding</strong>','Le switch ne connaît pas la MAC destination. Il diffuse la trame sur tous les ports du VLAN sauf le port d\'entrée.'],
    ['<strong>Forwarding</strong>','La MAC destination existe dans la table MAC. Le switch transmet la trame vers le bon port.'],
    ['<strong>Filtering</strong>','La MAC source et la MAC destination sont sur le même port. Le switch supprime la trame.'],
    ['<strong>Broadcast</strong>','La trame est envoyée à tous les équipements du VLAN.'],
    ['<strong>Unknown unicast</strong>','Destination inconnue. Le switch fait du flooding.']
  ])
),

S(13,'s13','Méthodes de communication du switch','store-and-forward cut-through fragment-free',
  tbl(['Méthode','Description','Fiabilité','Vitesse'],[
    ['<strong>Store-and-forward</strong>','Le switch reçoit toute la trame avant de transmettre. Il vérifie le FCS. Bloque les trames corrompues.','Fiable','Plus lente'],
    ['<strong>Cut-through</strong>','Le switch lit seulement l\'adresse MAC destination avant de transmettre. Risque de transmettre des erreurs.','Risque d\'erreurs','Rapide'],
    ['<strong>Fragment-free</strong>','Le switch lit les premiers 64 octets avant transmission. Évite les runts.','Compromis','Compromis']
  ])+
  memo(["Direct = rapide, mais peut laisser passer des erreurs.","Différé = lecture complète, vérification avant transmission.","Mixte = compromis entre rapidité et vérification."])
),

S(14,'s14','Domaines de communication','domaine collision diffusion broadcast hub couche 1 2 3',
  h3('Domaine de collision')+ul(["Partie du réseau où plusieurs équipements peuvent entrer en collision.","Présent surtout en half-duplex.","Chaque port de switch représente un domaine de collision indépendant."])+
  h3('Domaine de diffusion')+ul(["Ensemble des équipements qui reçoivent une trame broadcast.","Un VLAN représente un domaine de diffusion séparé.","Chaque interface de routeur crée un nouveau domaine de diffusion."])+
  h3('Hub')+ul(["Équipement de couche 1.","Reçoit un signal électrique sur un port.","Le reproduit sur tous les autres ports.","Un hub ne filtre pas.","Un hub ne lit pas les adresses MAC.","Un hub augmente les collisions."])+
  piege(["Switch réduit les collisions.","VLAN ou routeur réduit les broadcasts.","Hub travaille en couche 1.","Switch travaille en couche 2.","Routeur travaille en couche 3."])
)
]);
