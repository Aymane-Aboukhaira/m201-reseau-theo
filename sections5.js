addSections([
S(53,'s53','Options de connectivité Internet','xDSL ADSL VDSL fibre cellulaire 3G 4G 5G WiMAX MPLS Metro Ethernet DMVPN',
  tbl(['Technologie','Description'],[
    ['<strong>xDSL</strong>','Transmission via ligne téléphonique. Exemples : ADSL. VDSL.'],
    ['<strong>Fibre optique</strong>','Connexion par fibre. Très haut débit. Faible atténuation. Longue distance.'],
    ['<strong>Cellulaire</strong>','Connexion via réseau mobile. Exemples : 3G. 4G. 5G.'],
    ['<strong>WiMAX</strong>','Technologie sans fil longue distance. Fournit Internet dans des zones éloignées.'],
    ['<strong>Ethernet WAN</strong>','Extension Ethernet sur longues distances.'],
    ['<strong>MPLS</strong>','Technique de commutation basée sur des étiquettes. Supporte QoS. Supporte VPN. Utilisé par les opérateurs.'],
    ['<strong>Metro Ethernet</strong>','Extension Ethernet à l\'échelle métropolitaine.'],
    ['<strong>DMVPN</strong>','VPN multipoints dynamiques. Souvent utilisé pour hub-and-spoke dynamique.']
  ])+
  h3('Rôles MPLS')+ul(["CE : Customer Edge.","PE : Provider Edge.","P : Provider interne."])
),

S(54,'s54','ACL','ACL ACE access control list standard étendue nommée deny permit source destination port',
  def("Une ACL est une liste de contrôle d'accès. Elle autorise ou bloque le trafic selon des règles.")+
  p("ACE : Access Control Entry. Une ligne/règle dans une ACL.")+
  h3('Critères possibles')+ul(["Adresse source.","Adresse destination.","Protocole.","Port TCP/UDP.","Direction.","Interface."])+
  h3('Deny implicite')+p("Toute ACL finit par un deny implicite. Ce qui n'est pas autorisé est bloqué.")+
  h3('ACL standard')+p("Filtre uniquement selon l'adresse source. Numéros : 1–99. 1300–1999.")+p("Placement : Proche de la destination. Car elle n'est pas précise.")+
  h3('ACL étendue')+p("Filtre selon : source ; destination ; protocole ; port. Numéros : 100–199. 2000–2699.")+p("Placement : Proche de la source. Car elle est précise.")+
  h3('ACL nommée')+p("Plus lisible. Plus facile à modifier. Préférée dans les configurations modernes.")+
  piege(["ACL standard = source seulement = près destination.","ACL étendue = source + destination + protocole + port = près source."])
),

S(55,'s55','NAT / PAT','NAT PAT Network Address Translation statique dynamique overload privé public',
  h3('NAT')+def("Network Address Translation. Traduit les adresses IP privées en adresses publiques. Permet aux réseaux privés d'accéder à Internet.")+
  adv(["Économise les adresses IPv4 publiques.","Cache les adresses internes.","Facilite l'adressage privé."])+
  inc(["Peut compliquer IPsec.","Peut casser la logique de bout en bout.","Ajoute du traitement."])+
  tbl(['Type','Description'],[
    ['<strong>NAT statique</strong>','Mapping fixe 1:1. Une IP privée correspond à une IP publique. Utile pour publier un serveur interne.'],
    ['<strong>NAT dynamique</strong>','Utilise un pool d\'adresses publiques. Attribue dynamiquement une IP publique disponible.'],
    ['<strong>PAT / NAT Overload</strong>','Plusieurs adresses privées utilisent une seule adresse publique. Les sessions sont distinguées par les ports TCP/UDP. C\'est la forme la plus utilisée en entreprise.']
  ])+
  piege(["PAT = plusieurs privés vers une IP publique avec ports.","NAT dynamique classique = pool d'adresses publiques."])
),

S(56,'s56','VPN, GRE, IPsec','VPN GRE IPsec tunnel AH ESP IKE ISAKMP Diffie-Hellman site-à-site accès distant SSL AnyConnect',
  h3('VPN')+def("Virtual Private Network. Tunnel sécurisé sur un réseau public. Permet de transporter du trafic privé via Internet.")+
  h3('Types VPN')+
  tbl(['Type','Description'],[
    ['<strong>Site-à-site</strong>','Relie deux réseaux d\'entreprise. Tunnel entre passerelles VPN.'],
    ['<strong>Accès distant</strong>','Utilisateur distant vers réseau d\'entreprise. Utilise souvent un client VPN.'],
    ['<strong>VPN SSL sans client</strong>','Accès via navigateur. Pas forcément besoin de logiciel dédié.'],
    ['<strong>VPN avec client</strong>','Nécessite un logiciel comme AnyConnect.']
  ])+
  h3('GRE')+p("Generic Routing Encapsulation. Encapsule du trafic. Ne chiffre pas.")+
  h3('IPsec')+p("Sécurise le trafic IP. Assure : confidentialité ; intégrité ; authentification.")+
  tbl(['Protocole','Description'],[
    ['<strong>AH</strong>','Authentication Header. Authentification. Intégrité. Pas de chiffrement.'],
    ['<strong>ESP</strong>','Encapsulating Security Payload. Chiffrement. Intégrité. Authentification.'],
    ['<strong>IKE / ISAKMP</strong>','Négociation. Gestion des clés. Création des associations de sécurité.'],
    ['<strong>Diffie-Hellman</strong>','Permet l\'échange sécurisé de clés sur un réseau non sécurisé.']
  ])+
  h3('GRE over IPsec')+p("GRE encapsule. IPsec chiffre. Permet de transporter plusieurs types de trafic dans un tunnel sécurisé.")+
  piege(["GRE seul n'est pas sécurisé.","AH ne chiffre pas.","ESP chiffre."])
),

S(57,'s57','CDP','CDP Cisco discovery protocol couche 2 voisin',
  def("CDP est un protocole Cisco qui permet de découvrir les équipements Cisco directement connectés. Couche : Couche 2.")+
  h3('Informations fournies')+ul(["Nom de l'équipement voisin.","Interface locale.","Interface distante.","Adresse IP.","Modèle.","Plateforme.","Système / version IOS."])+
  piege(["CDP est propriétaire Cisco.","LLDP est standard ouvert."])
),

S(58,'s58','LLDP','LLDP 802.1AB standard ouvert discovery',
  def("LLDP est un protocole standard permettant de découvrir les équipements voisins. Standard : IEEE 802.1AB.")+
  adv(["Fonctionne avec plusieurs constructeurs."])+
  memo(["CDP = Cisco.","LLDP = standard ouvert."])
),

S(59,'s59','Dépannage réseau','dépannage bottom-up top-down divide conquer follow path substitution comparaison',
  tbl(['Méthode','Description'],[
    ['<strong>Bottom-up</strong>','Commence à la couche physique. Remonte couche par couche. Utile si problème de câble, interface, signal.'],
    ['<strong>Top-down</strong>','Commence à la couche application. Descend vers les couches basses. Utile si problème applicatif.'],
    ['<strong>Divide and conquer</strong>','Commence à une couche intermédiaire. Souvent couche 3. Permet de gagner du temps.'],
    ['<strong>Follow the path</strong>','Suit le chemin source → destination. Utile pour routage et ACL.'],
    ['<strong>Substitution</strong>','Remplace un composant suspect.'],
    ['<strong>Comparaison</strong>','Compare avec une configuration fonctionnelle.']
  ])
),

S(60,'s60','VoIP','VoIP voix sur IP paquet RTP convergence',
  def("La VoIP permet de transmettre la voix via un réseau IP au lieu d'utiliser le téléphone classique.")+
  h3('Principe')+ul(["La voix analogique est convertie en signal numérique.","La voix est découpée en segments.","Chaque segment devient un paquet.","Les paquets sont transportés sur IP.","La voix est reconstituée côté destination."])+
  h3('Paquets voix')+ul(["La voix est découpée en petits segments.","Chaque segment devient souvent un paquet RTP.","Les paquets sont envoyés en continu."])+
  adv(["Réduction des coûts.","Convergence voix/données/vidéo.","Mobilité.","Messagerie unifiée.","Fonctionnalités avancées.","Administration centralisée."])
),

S(61,'s61','Architecture VoIP','IP PBX gateway switch PoE VLAN voix RTPC FXS FXO',
  h3('Composants')+
  tbl(['Composant','Description'],[
    ['<strong>Téléphone IP</strong>','Terminal utilisateur pour la voix IP.'],
    ['<strong>IP PBX</strong>','Serveur de gestion des appels.'],
    ['<strong>Gateway VoIP</strong>','Convertit entre réseau IP et réseau téléphonique.'],
    ['<strong>Switch</strong>','Connecte les téléphones IP. Peut fournir l\'alimentation PoE. Utilise souvent un VLAN voix.'],
    ['<strong>DHCP</strong>','Attribue une adresse IP aux téléphones IP. Peut fournir l\'option 150.'],
    ['<strong>VLAN voix</strong>','Isole le trafic VoIP. Permet d\'appliquer QoS.'],
    ['<strong>RTPC</strong>','Réseau Téléphonique Public Commuté. Réseau téléphonique classique.'],
    ['<strong>PBX</strong>','Private Branch Exchange. Commutateur téléphonique privé d\'entreprise. Gère les appels internes et externes.'],
    ['<strong>FXS</strong>','Foreign Exchange Station. Fournit tonalité, alimentation et sonnerie. Se connecte au téléphone analogique.'],
    ['<strong>FXO</strong>','Foreign Exchange Office. Se connecte au central téléphonique ou au PBX. Reçoit la ligne du fournisseur.']
  ])+
  piege(["FXS alimente le téléphone.","FXO se connecte au central."])
),

S(62,'s62','Protocoles VoIP','H.323 SIP RTP RTCP MGCP SCCP Skinny signalisation',
  tbl(['Protocole','Description'],[
    ['<strong>H.323</strong>','Ancien protocole de signalisation VoIP. Complet. Utilisé avec des systèmes anciens.'],
    ['<strong>SIP</strong>','Protocole moderne. Stable. Simple. Flexible. Standard très utilisé aujourd\'hui. Sert à créer, modifier et terminer les appels.'],
    ['<strong>RTP</strong>','Real-time Transport Protocol. Transporte la voix et la vidéo en temps réel. Utilise UDP.'],
    ['<strong>RTCP</strong>','Contrôle RTP. Fournit des statistiques de qualité.'],
    ['<strong>MGCP</strong>','Contrôle de passerelle. Modèle maître/esclave. Contrôleur centralisé.'],
    ['<strong>SCCP / Skinny</strong>','Protocole Cisco propriétaire. Utilisé avec certains téléphones IP Cisco.']
  ])
),

S(63,'s63','CME — Cisco Unified Communications Manager Express','CME téléphonie IP routeur Cisco ephone ephone-dn DHCP option 150 TFTP',
  def("CME est une solution de téléphonie IP intégrée dans un routeur Cisco.")+
  h3('Rôle')+p("Gérer : téléphones IP ; appels internes ; messagerie vocale ; extensions ; configuration des téléphones.")+
  h3('Éléments visibles')+ul(["VLAN voix.","DHCP option 150.","Téléchargement de configuration pour les téléphones IP.","Sécurisation HTTPS.","ephone : téléphone physique.","ephone-dn : numéro / téléphone logique.","Support VoIP dans le LAN.","Rôle proche d'un petit PBX intégré."])+
  tbl(['Élément','Description'],[
    ['<strong>Ephone</strong>','Téléphone IP physique. Souvent identifié par adresse MAC.'],
    ['<strong>Ephone-dn</strong>','Directory Number. Numéro logique / extension. Associé à un téléphone.']
  ])+
  h3('DHCP option 150')+p("Indique l'adresse du serveur TFTP aux téléphones IP. Permet le téléchargement de configuration.")
),

S(64,'s64','QoS VoIP','QoS qualité de service délai jitter perte DSCP EF',
  h3('Besoin')+p("La voix est sensible à : délai ; jitter ; perte de paquets.")+
  h3('Valeurs importantes')+
  tbl(['Paramètre','Valeur recommandée'],[
    ['Délai','< 150 ms'],['Jitter','< 30 ms'],['Perte','< 1 %']
  ])+
  h3('DSCP EF')+p("Marquage utilisé pour prioriser la voix. EF = Expedited Forwarding.")+
  h3('VLAN voix')+p("Sépare le trafic voix. Permet de prioriser les paquets VoIP.")
),

S(65,'s65','Dial Peers','dial peer POTS VoIP codec matching wildcard',
  def("Un dial peer définit un point d'extrémité ou un chemin pour un appel VoIP.")+
  h3('Rôle')+ul(["Déterminer où envoyer l'appel.","Définir le codec.","Définir les propriétés de transmission.","Relier VoIP et téléphonie traditionnelle."])+
  tbl(['Type','Description'],[
    ['<strong>POTS Dial Peer</strong>','Vers réseau téléphonique classique. Utilise interfaces FXS, FXO, E&M, BRI ou PRI.'],
    ['<strong>VoIP Dial Peer</strong>','Vers réseau IP. Utilise une adresse IP destination.']
  ])+
  h3('Matching')+p("Le motif le plus spécifique est choisi. Logique proche du longest match en routage IP.")+
  h3('Wildcards')+
  tbl(['Symbole','Signification'],[
    ['.','Un chiffre quelconque.'],['T','Longueur variable.'],['+','Répétition du chiffre précédent.'],['[ ]','Série ou plage de chiffres.'],[',','Pause d\'une seconde.']
  ])
),

S(66,'s66','Notes visibles partiellement lisibles','fragments corrigés corrections notes',
  h3('Fragments corrigés')+ul([
    "\"FCOO à FCFF\" correspond probablement à FC00 à FCFF.",
    "\"Multidiffusion pour communication de groupe\" correspond aux adresses FF00::/8.",
    "\"Local unique pour identifier un hôte dans un réseau spécifique\" correspond aux ULA FC00::/7.",
    "\"Loopback permet à un équipement de communiquer avec lui-même\" correspond à ::1/128.",
    "\"Option 150 IP\" correspond à l'adresse TFTP pour téléphones IP.",
    "\"Téléchargement config des téléphones IP\" correspond au processus CME/TFTP.",
    "\"Sécuriser HTTPS\" correspond à l'accès sécurisé au service de configuration ou d'administration.",
    "\"Double home\" correspond probablement à deux liens ou deux chemins physiques.",
    "\"Des secours / redondance\" correspond à la haute disponibilité."
  ])
),

S(67,'s67','Ports importants à mémoriser','ports TCP UDP SSH Telnet HTTP HTTPS DNS DHCP NTP SNMP syslog BGP RADIUS TFTP POP IMAP CAPWAP',
  tbl(['Catégorie','Protocole','Port'],[
    ['Administration','SSH','TCP 22'],['Administration','Telnet','TCP 23'],
    ['Web','HTTP','TCP 80'],['Web','HTTPS','TCP 443'],
    ['Noms et adressage','DNS','UDP/TCP 53'],['Noms et adressage','DHCP serveur','UDP 67'],['Noms et adressage','DHCP client','UDP 68'],
    ['Temps et supervision','NTP','UDP 123'],['Temps et supervision','SNMP requêtes','UDP 161'],['Temps et supervision','SNMP traps','UDP 162'],['Temps et supervision','Syslog','UDP 514'],
    ['Routage','BGP','TCP 179'],
    ['Authentification','RADIUS authentication','UDP 1812'],['Authentification','RADIUS accounting','UDP 1813'],
    ['Fichiers','TFTP','UDP 69'],
    ['Mail','POP','TCP 110'],['Mail','POP sécurisé','TCP 995'],['Mail','IMAP','TCP 143'],['Mail','IMAP sécurisé','TCP 993'],
    ['WLAN','CAPWAP contrôle','UDP 5246'],['WLAN','CAPWAP données','UDP 5247']
  ])
),

S(68,'s68','Distances administratives à graver','distance administrative DA connecté statique EIGRP eBGP OSPF IS-IS RIP iBGP',
  tbl(['Source','Distance Administrative'],[
    ['Connecté','0'],['Statique','1'],['EIGRP résumé','5'],['eBGP','20'],['EIGRP interne','90'],
    ['OSPF','110'],['IS-IS','115'],['RIP','120'],['EIGRP externe','170'],['iBGP','200']
  ])
),

S(69,'s69','Mémo final M201','mémo résumé final IP MAC switch routeur VLAN trunk STP EtherChannel HSRP DHCP SLAAC OSPF EIGRP BGP WAN PPP ACL NAT VPN GRE IPsec SNMP syslog NTP VoIP SIP RTP CME',
  memo([
    "IP = couche 3.","MAC = couche 2.","Switch = table MAC.","Routeur = table de routage.",
    "VLAN = domaine de broadcast séparé.","Access = un VLAN.","Trunk = plusieurs VLANs.",
    "802.1Q = tag VLAN.","Native VLAN = non taguée.","DTP = négociation trunk Cisco.","VTP = propagation VLAN Cisco.",
    "Inter-VLAN = routage entre VLANs.","Router-on-a-stick = sous-interfaces.","Switch L3 = SVI + ip routing.",
    "STP = anti-boucle.","Root Bridge = Bridge ID le plus faible.","PortFast = uniquement vers terminal.","BPDU Guard = protège PortFast.",
    "EtherChannel = plusieurs liens physiques → un lien logique.","PAgP = Cisco.","LACP = standard.",
    "HSRP = passerelle virtuelle Cisco.","VRRP = passerelle virtuelle standard.","GLBP = redondance + équilibrage.",
    "DHCP = DORA.","SLAAC = RS + RA + préfixe + DAD.",
    "OSPF = link-state + coût.","DR/BDR = optimisation réseau multi-access.","EIGRP = DUAL.","BGP = inter-AS + AS Path.",
    "WAN = relier sites distants.","PPP = LCP + authentification + NCP.","PAP = mot de passe en clair.","CHAP = plus sécurisé.",
    "ACL standard = source seulement.","ACL étendue = source + destination + protocole + port.",
    "NAT = privé vers public.","PAT = plusieurs privés vers une IP publique.",
    "VPN = tunnel sécurisé.","GRE = encapsule sans chiffrer.","IPsec = chiffre / authentifie / protège l'intégrité.",
    "SNMP = supervision.","Syslog = logs.","NTP = heure.","CDP = Cisco.","LLDP = standard.",
    "VoIP = voix sur IP.","SIP = signalisation moderne.","RTP = transport voix.","CME = téléphonie IP dans routeur Cisco."
  ])
),

S(70,'s70','Pièges d\'examen','pièges examen erreur piège attention',
  piege([
    "VLAN natif ≠ VLAN de gestion.",
    "Deux VLANs ne communiquent pas sans routage inter-VLAN.",
    "Switch réduit les collisions mais ne coupe pas les broadcasts sans VLAN.",
    "Routeur coupe les domaines de broadcast.",
    "PortFast ne doit pas être activé vers un switch.",
    "BPDU Guard met le port en err-disabled si BPDU reçue.",
    "PAgP auto + auto ne fonctionne pas.",
    "LACP passive + passive ne fonctionne pas.",
    "Protect ne journalise pas.",
    "Restrict journalise et incrémente le compteur.",
    "Shutdown désactive le port.",
    "OSPF choisit le Router ID manuel avant loopback.",
    "DR/BDR dépend de la priorité puis du Router ID.",
    "Priorité OSPF 0 = jamais DR/BDR.",
    "Route flottante = AD plus élevée.",
    "Longest match = préfixe le plus long.",
    "ACL standard proche destination.",
    "ACL étendue proche source.",
    "PAT est la forme la plus utilisée de NAT.",
    "AH ne chiffre pas.",
    "ESP chiffre.",
    "GRE seul n'est pas sécurisé.",
    "WEP est obsolète.",
    "WPA2 Enterprise utilise 802.1X/RADIUS.",
    "CAPWAP contrôle = UDP 5246.",
    "CAPWAP données = UDP 5247.",
    "FXS alimente le téléphone.",
    "FXO se connecte au central.",
    "Syslog 0 est plus grave que Syslog 7."
  ])
)
]);
