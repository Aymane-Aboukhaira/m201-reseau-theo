addSections([
S(39,'s39','Conception hiérarchique du réseau','hiérarchique accès distribution cœur PoE switch choix',
  def("Modèle hiérarchique dans lequel l'architecture réseau est divisée en plusieurs couches, chacune avec une fonction spécifique.")+
  tbl(['Couche','Rôle'],[
    ['<strong>Couche accès</strong>','Connecte les utilisateurs. Connecte les PC. Connecte les imprimantes. Connecte les téléphones IP. Connecte les points d\'accès AP. Applique souvent Port Security et VLAN.'],
    ['<strong>Couche distribution</strong>','Agrège les switches d\'accès. Fait le routage inter-VLAN. Applique les politiques de sécurité. Utilise ACL. Assure redondance et filtrage.'],
    ['<strong>Couche cœur</strong>','Connecte le réseau dorsal. Haute disponibilité. Haute vitesse. Transport rapide du trafic. Doit rester simple et performant.']
  ])+
  h3('Évolution du réseau')+ul(["Adapter l'infrastructure aux nouveaux besoins :","ajouter de nouveaux utilisateurs ;","augmenter la bande passante ;","mettre en place la redondance ;","ajouter des VLANs ;","améliorer la sécurité ;","prévoir la croissance."])+
  h3('Choix d\'un switch')+ul(["Coût.","Densité des ports.","Débit.","PoE.","Fonctionnalités de sécurité.","Support VLAN.","Support couche 3.","Empilabilité.","Évolutivité."])+
  h3('PoE')+p("Power over Ethernet. Alimente par câble Ethernet : téléphones IP ; AP ; caméras IP.")
),

S(40,'s40','Supervision','SNMP syslog NTP LLDP CDP supervision MIB trap',
  h3('SNMP')+p("Surveillance du réseau. Permet de collecter des informations sur les équipements.")+
  sub('Composants',['Manager / NMS.','Agent.','MIB.'])+
  p("Ports : UDP 161 pour les requêtes. UDP 162 pour les traps.")+
  tbl(['Version','Description'],[['SNMPv1','Ancien, non sécurisé.'],['SNMPv2c','Community en clair.'],['SNMPv3','Authentification et chiffrement, recommandé.']])+
  h3('Syslog')+p("Journalisation des événements. Centralise les logs. Port UDP 514.")+
  h3('Niveaux Syslog')+
  tbl(['Niveau','Nom'],[['0','Emergency'],['1','Alert'],['2','Critical'],['3','Error'],['4','Warning'],['5','Notice'],['6','Informational'],['7','Debug']])+
  piege(["0 = plus grave.","7 = moins grave / debug."])+
  h3('NTP')+p("Synchronisation de l'heure. Port UDP 123. Important pour : logs ; sécurité ; corrélation d'événements ; dépannage ; certificats.")+
  h3('LLDP')+p("Protocole standard ouvert. Découvre les équipements voisins. Multi-constructeurs.")+
  h3('CDP')+p("Protocole Cisco. Découvre les équipements Cisco directement connectés.")
),

S(41,'s41','WLAN','WLAN Wi-Fi 802.11 AP WLC SSID canal fréquence 2.4GHz 5GHz',
  def("Un WLAN est un réseau local sans fil utilisant les normes IEEE 802.11 pour permettre la communication entre équipements via les ondes radio.")+
  h3('Composants WLAN')+ul(["Client sans fil.","Point d'accès AP.","WLC : contrôleur qui gère plusieurs AP de manière centralisée.","Serveur RADIUS pour WPA2/WPA3 Enterprise.","Infrastructure filaire associée."])+
  h3('Fonctionnement WLAN')+ul(["Scanning.","Authentification.","Association.","Transmission des données.","Obtention d'adresse IP.","Accès au réseau."])+
  h3('SSID')+p("Nom du réseau Wi-Fi. Identifie le WLAN.")+
  h3('Canal')+p("Fréquence utilisée par l'AP. Doit être choisi pour réduire les interférences.")+
  p("Canaux non chevauchants 2,4 GHz : Canal 1. Canal 6. Canal 11.")+
  h3('Fréquences')+
  tbl(['Fréquence','Portée','Débit','Interférences'],[
    ['2,4 GHz','Plus grande','Plus faible','Plus d\'interférences'],
    ['5 GHz','Plus faible','Plus élevé','Moins d\'interférences'],
    ['6 GHz','—','Haut débit. Faible congestion.','Utilisé par Wi-Fi 6E']
  ])
),

S(42,'s42','Normes Wi-Fi','Wi-Fi 4 5 6 6E 802.11n ac ax MIMO OFDMA',
  tbl(['Norme','IEEE','Fréquence','Caractéristiques'],[
    ['<strong>Wi-Fi 4</strong>','802.11n','2,4 GHz et 5 GHz','MIMO. Débits supérieurs aux anciennes normes.'],
    ['<strong>Wi-Fi 5</strong>','802.11ac','5 GHz','Débit élevé. MU-MIMO.'],
    ['<strong>Wi-Fi 6</strong>','802.11ax','2,4 GHz et 5 GHz','OFDMA. Meilleure gestion des environnements denses.'],
    ['<strong>Wi-Fi 6E</strong>','802.11ax','6 GHz','Moins de congestion. Débit élevé.']
  ])
),

S(43,'s43','CAPWAP','CAPWAP WLC AP léger tunnel contrôle données UDP 5246 5247',
  def("CAPWAP permet au WLC de gérer les points d'accès légers. Control And Provisioning of Wireless Access Points.")+
  p("Ports : Contrôle : UDP 5246. Données : UDP 5247.")+
  h3('Fonctionnement')+p("Utilise deux tunnels : tunnel de contrôle ; tunnel de données.")+
  h3('Rôle')+ul(["Permet la configuration centralisée des AP.","Permet la supervision des AP.","Permet la gestion radio.","Permet de séparer contrôle et données."])
),

S(44,'s44','Menaces WLAN','menace rogue AP evil twin DoS sniffing interférence',
  tbl(['Menace','Description'],[
    ['<strong>Rogue AP</strong>','Point d\'accès non autorisé. Peut donner un accès non sécurisé au réseau.'],
    ['<strong>Evil Twin</strong>','Faux réseau Wi-Fi créé par un attaquant. Imite un vrai SSID. Peut voler des identifiants.'],
    ['<strong>DoS</strong>','Rend le réseau indisponible. Peut venir du brouillage radio ou de paquets malveillants.'],
    ['<strong>Sniffing</strong>','Capture du trafic Wi-Fi. Risque élevé si le trafic n\'est pas chiffré.'],
    ['<strong>Interférences</strong>','Peuvent dégrader les performances. Causées par autres AP, appareils radio, mauvais canaux.']
  ])
),

S(45,'s45','Sécurité WLAN','WEP WPA WPA2 WPA3 AES TKIP SAE 802.1X RADIUS Personal Enterprise filtrage MAC',
  tbl(['Protocole','Chiffrement','Niveau'],[
    ['<strong>WEP</strong>','RC4','Ancien. Faible. À éviter.'],
    ['<strong>WPA</strong>','TKIP','Ancien. Meilleur que WEP mais dépassé.'],
    ['<strong>WPA2</strong>','AES','Très utilisé. Mode Personal ou Enterprise.'],
    ['<strong>WPA3</strong>','SAE','Très fort. À privilégier.']
  ])+
  h3('802.1X')+p("Authentification basée sur serveur RADIUS. Utilisée en entreprise.")+
  h3('Filtrage MAC')+p("Autorise certaines adresses MAC seulement. Mesure faible seule, car une MAC peut être usurpée.")+
  h3('WPA2 Personal')+p("Mot de passe partagé. Simple. Adapté aux petits réseaux.")+
  h3('WPA2 Enterprise')+p("Utilise : 802.1X ; serveur RADIUS.")+
  p("Chemin d'authentification : Client → AP → WLC → Serveur RADIUS.")+
  adv(["Authentification individuelle.","Sécurité élevée.","Gestion centralisée.","Adapté aux entreprises."])+
  h3('Modes AP')+tbl(['Mode','Description'],[['<strong>AP autonome</strong>','Configuration individuelle. Pas de WLC.'],['<strong>AP léger</strong>','Géré par un WLC. Utilise CAPWAP.']])
),

S(46,'s46','WLAN de site distant','site distant agence AP SSID WPA2 WPA3',
  def("Un site distant est une agence ou un bureau éloigné du siège principal.")+
  h3('Étapes')+ul(["Installer un AP.","Configurer un SSID.","Choisir WPA2 ou WPA3.","Configurer l'adressage IP.","Associer le WLAN au VLAN.","Vérifier la connectivité.","Vérifier la sécurité."])
),

S(47,'s47','WLAN de base sur WLC','WLC WLAN SSID VLAN sécurité radio dépannage',
  p("Objectif : Créer un réseau Wi-Fi fonctionnel avec : SSID ; VLAN associé ; sécurité ; connexion utilisateur.")+
  h3('Étapes')+ul(["Créer le WLAN.","Associer le WLAN à un VLAN.","Activer le WLAN.","Choisir le type de sécurité.","Configurer les paramètres radio.","Vérifier."])+
  h3('Sécurité possible')+ul(["WPA2 Personal.","WPA2 Enterprise.","WPA3 selon matériel."])+
  h3('Dépannage WLAN')+ul(["Vérifier : SSID ; signal Wi-Fi ; authentification ; adresse IP ; interférences ; AP ; WLC ; VLAN ; DHCP ; RADIUS."])
),

S(48,'s48','WAN','WAN réseau étendu CPE CO boucle locale privé public',
  def("Un WAN est un réseau étendu permettant d'interconnecter des réseaux LAN géographiquement éloignés.")+
  h3('Rôle')+ul(["Relier siège et agences.","Connecter plusieurs sites.","Transporter données, voix, vidéo entre longues distances."])+
  h3('Éléments WAN')+
  tbl(['Élément','Description'],[
    ['<strong>CPE</strong>','Customer Premises Equipment. Équipement chez le client. Exemple : routeur, modem.'],
    ['<strong>CO</strong>','Central Office. Bureau central de l\'opérateur téléphonique.'],
    ['<strong>Boucle locale</strong>','Connexion physique entre le CPE et le CO.']
  ])+
  h3('Types de WAN')+
  tbl(['Type','Description'],[
    ['<strong>WAN privé</strong>','Connexion dédiée. Bande passante garantie. Plus sécurisé. Coût élevé.'],
    ['<strong>WAN public</strong>','Infrastructure partagée. Internet. Bande passante variable. Moins sécurisé sans VPN.']
  ])
),

S(49,'s49','Topologies WAN','topologie WAN point-à-point hub-and-spoke maillage dual-homed',
  tbl(['Topologie','Description'],[
    ['<strong>Point-à-point</strong>','Connexion directe entre deux points. Simple. Faible redondance.'],
    ['<strong>Étoile / Hub-and-spoke</strong>','Site central relié à plusieurs sites distants. Dépend fortement du hub.'],
    ['<strong>Maillage complet / Full mesh</strong>','Tous les sites sont interconnectés. Très redondant. Coût élevé.'],
    ['<strong>Maillage partiel / Partial mesh</strong>','Seuls certains sites sont directement connectés. Équilibre entre coût et redondance.'],
    ['<strong>Dual-homed</strong>','Un site possède deux liens ou deux chemins physiques. Améliore la redondance.']
  ])
),

S(50,'s50','Types de commutation WAN','circuit-switched packet-switched RTC MPLS série',
  tbl(['Type','Description','Exemple'],[
    ['<strong>Circuit-switched</strong>','Établit un circuit dédié pendant toute la communication.','RTC'],
    ['<strong>Packet-switched</strong>','Découpe les données en paquets. Utilise une infrastructure partagée.','MPLS'],
    ['<strong>Série</strong>','Liaison point-à-point sur interface série. Utilisée historiquement entre routeurs.','—']
  ])
),

S(51,'s51','Technologies WAN couche 1','SDH SONET DWDM fibre optique',
  tbl(['Technologie','Description'],[
    ['<strong>SDH</strong>','Synchronous Digital Hierarchy. Gestion internationale du débit sur fibre optique.'],
    ['<strong>SONET</strong>','Norme nord-américaine équivalente à SDH.'],
    ['<strong>DWDM</strong>','Transmet plusieurs signaux sur une seule fibre optique grâce à différentes longueurs d\'onde. Augmente la capacité d\'une fibre.']
  ])
),

S(52,'s52','Technologies WAN couche 2','PPP LCP NCP PAP CHAP ATM Frame Relay DLCI',
  h3('PPP')+def("PPP est un protocole point-à-point qui crée une liaison directe entre deux équipements connectés.")+
  h3('Fonctionnement PPP')+ul(["1. Établissement de la liaison : Utilise LCP. Négocie les paramètres de communication.","2. Authentification : PAP. CHAP.","3. Transmission des données : Utilise NCP. Configure le protocole de couche réseau. Permet l'échange des données."])+
  tbl(['','PAP','CHAP'],[['Sécurité','Mot de passe envoyé en clair. Pas sécurisé.','Mot de passe jamais envoyé en clair. Challenge/réponse. Plus sécurisé.']])+
  adv(["Support multiprotocole.","Fiabilité élevée.","Authentification possible."])+
  h3('ATM')+p("Utilise des cellules fixes de 53 octets. Garantit une bonne qualité de service, QoS.")+
  h3('Frame Relay')+p("Commutation de paquets. NBMA. Utilise des circuits virtuels permanents. Identifiant DLCI.")
)
]);
