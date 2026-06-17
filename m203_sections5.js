addM203Sections([
S(37, 's37', 'CPE, vCPE et uCPE', 'cpe, vcpe et ucpe',
  h3('CPE')+
  ul(['Customer Premises Equipment.','Équipement physique chez le client.'])+
  h4('Exemples')+
  ul(['Routeur WAN.','Firewall.','Modem.','Appliance opérateur.'])+
  h3('vCPE')+
  ul(['Virtual Customer Premises Equipment.','Fonction CPE virtualisée.'])+
  h4('Principe')+
  p('Remplacer des appliances physiques par des fonctions virtuelles.')+
  h4('Exemples')+
  ul(['Firewall virtuel.','Routeur virtuel.','WAN optimizer virtuel.'])+
  h3('uCPE')+
  ul(['Universal Customer Premises Equipment.','Boîtier physique universel capable d\u2019héberger plusieurs VNFs.'])+
  h4('Rôle')+
  ul(['Plateforme physique standardisée.','Héberge vCPE et autres fonctions réseau virtuelles.','Réduit le besoin de plusieurs boîtiers dédiés.'])+
  h3('Comparaison')+
  p('vCPE = ce qu\u2019on virtualise. uCPE = où on virtualise.')+
  piege(['vCPE n\u2019est pas le boîtier physique. uCPE est le boîtier physique qui héberge les fonctions virtualisées.','---'])
),
S(38, 's38', 'Réseau WAN hybride', 'réseau wan hybride',
  def('WAN utilisant plusieurs types de liens.')+
  h3('Liens possibles')+
  ul(['MPLS.','Internet haut débit.','4G/5G.','Fibre.','LTE.','Satellite selon contexte.'])+
  h3('Objectif')+
  p('Combiner coût, performance et disponibilité.')+
  h3('Exemple')+
  p('Une agence utilise MPLS pour applications critiques et Internet fibre pour trafic cloud.')
),
S(39, 's39', 'SD-WAN', 'sd-wan',
  def('SD-WAN signifie Software Defined Wide Area Network. C\u2019est l\u2019application des principes SDN au réseau WAN.')+
  h3('Rôle')+
  ul(['Centraliser la gestion du WAN.','Optimiser le trafic inter-sites.','Utiliser plusieurs liens intelligemment.','Réduire la dépendance MPLS.','Appliquer des politiques par application.'])+
  p('Le support associe le SD-WAN aux WAN d\u2019entreprise et à l\u2019optimisation des communications inter-agences.')+
  h3('Composants')+
  ul(['Contrôleur centralisé.','Routeurs/edge SD-WAN.','Overlay sécurisé.','Politiques applicatives.','Portail d\u2019administration.'])+
  h3('Fonctionnalités')+
  ul(['Sélection dynamique du chemin.','Application awareness.','Chiffrement des tunnels.','QoS.','Load balancing.','Failover automatique.','ZTP.','Supervision centralisée.','Optimisation WAN.'])+
  h3('Application awareness')+
  p('Le SD-WAN reconnaît les applications. Il choisit le lien selon les besoins de l\u2019application.')+
  h4('Exemple')+
  ul(['VoIP → lien faible latence.','Backup → lien économique.','ERP → lien fiable.','Web → Internet local.'])
),
S(40, 's40', 'SD-WAN vs WAN traditionnel', 'sd-wan vs wan traditionnel',
  h3('WAN traditionnel')+
  ul(['Configuration manuelle.','Dépendance à MPLS.','Peu de visibilité applicative.','Politiques difficiles à appliquer partout.','Coût élevé.'])+
  h3('SD-WAN')+
  ul(['Contrôle centralisé.','Utilisation de liens hybrides.','Politiques par application.','Failover automatique.','Meilleure visibilité.','Coût optimisé.'])+
  piege(['SD-WAN n\u2019est pas seulement un VPN. C\u2019est une solution de gestion intelligente du WAN.','---'])
),
S(41, 's41', 'SD-Access', 'sd-access',
  def('SD-Access est une architecture SDN appliquée au réseau campus.')+
  h3('Rôle')+
  ul(['Automatiser le réseau d\u2019accès.','Segmenter les utilisateurs.','Appliquer la sécurité par identité.','Simplifier l\u2019administration du campus.'])+
  h3('Domaine d\u2019utilisation')+
  ul(['Entreprises.','Universités.','Campus.','Grands LAN.','Réseaux d\u2019accès filaires et sans fil.'])+
  h3('Valeur ajoutée')+
  ul(['Automatisation.','Segmentation.','Sécurité par identité.','Politiques centralisées.','Réduction de la configuration manuelle.'])
),
S(42, 's42', 'Composants SD-Access', 'composants sd-access',
  h3('Cisco DNA Center')+
  p('Contrôleur/orchestrateur. Automatise la configuration. Applique les politiques. Supervise le réseau.')+
  h3('Control Plane Node')+
  p('Gère les informations de localisation. Utilise LISP. Associe identité logique et localisation réseau.')+
  h3('Edge Nodes')+
  p('Points d\u2019entrée des utilisateurs dans la fabric. Connectent les clients. Appliquent les politiques.')+
  h3('Border Nodes')+
  p('Connectent la fabric SD-Access vers l\u2019extérieur. Interconnectent campus, data center, WAN, Internet.')+
  h3('Intermediate Nodes')+
  p('Transport dans la fabric. Assurent la connectivité underlay entre nodes.')+
  h3('Fabric')+
  p('Architecture logique SD-Access. Combine overlay, underlay, contrôle et politiques.')+
  h3('VRF')+
  p('Sépare les tables de routage. Permet la segmentation.')
),
S(43, 's43', 'LISP', 'lisp',
  def('LISP signifie Locator/ID Separation Protocol.')+
  h3('Rôle')+
  p('Séparer l\u2019identité d\u2019un appareil de sa localisation dans le réseau.')+
  h3('Dans SD-Access')+
  p('LISP sert de protocole de contrôle. Il indique où se trouve un endpoint. Il permet de retrouver le bon Edge Node pour joindre un utilisateur ou une machine.')+
  h3('Principe')+
  p('Un appareil garde son identité. Sa localisation réseau peut changer. Le réseau sait retrouver sa position actuelle.')
),
S(44, 's44', 'EID et RLOC', 'eid et rloc',
  h3('EID')+
  p('Endpoint Identifier. Identité de l\u2019appareil. Ne change pas quand l\u2019appareil se déplace.')+
  h3('RLOC')+
  p('Routing Locator. Localisation de l\u2019appareil dans le réseau. Change selon la position dans le réseau.')+
  h3('Comparaison')+
  p('EID = qui est l\u2019appareil. RLOC = où se trouve l\u2019appareil.')+
  h3('Exemple')+
  p('Un utilisateur se déplace dans le campus. Son EID reste le même. Son RLOC change selon l\u2019Edge Node auquel il est connecté.')+
  p('La synthèse SDN rappelle justement : EID = identité de l\u2019appareil, RLOC = localisation de l\u2019appareil ; EID ne change pas quand l\u2019appareil se déplace, RLOC change selon la position.')
),
S(45, 's45', 'VRF', 'vrf',
  def('VRF signifie Virtual Routing and Forwarding.')+
  h3('Rôle')+
  p('Avoir plusieurs tables de routage indépendantes sur le même équipement.')+
  h3('Avantages')+
  ul(['Segmentation logique.','Séparation des groupes.','Isolation des flux.','Sécurité renforcée.','Mutualisation de l\u2019infrastructure.'])+
  h3('Dans SD-Access')+
  p('Séparer les utilisateurs ou services. Créer des segments indépendants. Appliquer des politiques différentes.')+
  h3('Exemple')+
  ul(['VRF Finance.','VRF Invités.','VRF Administration.','VRF IoT.'])+
  piege(['VRF ne chiffre pas. VRF segmente les tables de routage.','---'])
)
]);
