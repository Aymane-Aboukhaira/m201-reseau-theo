addM203Sections([
S(19, 's19', 'Réseau programmable', 'réseau programmable',
  def('Un réseau programmable est un réseau dont le comportement peut être modifié par logiciel via des API.')+
  h3('Rôle')+
  ul(['Créer dynamiquement des règles.','Automatiser la configuration.','Adapter le réseau à l\u2019application.','Réagir aux événements.'])+
  h3('Exemple')+
  p('Une application de sécurité détecte une attaque. Elle demande au contrôleur de bloquer le flux. Le contrôleur installe une règle drop dans les switches.')
),
S(20, 's20', 'Automatisation SDN', 'automatisation sdn',
  def('L\u2019automatisation SDN consiste à gérer le réseau par scripts, API ou outils d\u2019orchestration.')+
  h3('Outils')+
  ul(['Python.','Ansible.','REST API.','NETCONF.','OVSDB.','Postman pour test.','JSON pour échanges.'])+
  h3('Objectifs')+
  ul(['Réduire les erreurs humaines.','Déployer plus vite.','Appliquer des politiques cohérentes.','Réagir automatiquement aux événements.','Standardiser les configurations.'])+
  h3('Exemple')+
  ul(['Créer automatiquement un réseau virtuel.','Créer automatiquement une politique QoS.','Bloquer automatiquement une attaque.','Déployer des règles de flux.'])
),
S(21, 's21', 'NETCONF', 'netconf',
  def('NETCONF est un protocole de gestion réseau.')+
  h3('Rôle')+
  p('Configurer des équipements réseau de manière structurée. Utilise souvent XML. Permet des opérations programmables.')+
  h3('Usage SDN')+
  p('Automatisation. Configuration contrôlée. Gestion d\u2019équipements réseau.')
),
S(22, 's22', 'REST API vs OpenFlow', 'rest api vs openflow',
  h3('REST API')+
  ul(['Communication application ↔ contrôleur.','Souvent API Nord.','Utilise HTTP.','Souvent avec JSON.'])+
  h3('OpenFlow')+
  ul(['Communication contrôleur ↔ switch.','API Sud.','Installe des règles de forwarding.'])+
  piege(['REST API sert à piloter le contrôleur. OpenFlow sert au contrôleur pour piloter les équipements.','---'])
),
S(23, 's23', 'Réseaux Overlay', 'réseaux overlay',
  def('Un réseau Overlay est un réseau virtuel construit au-dessus d\u2019un réseau physique existant.')+
  h3('Rôle')+
  ul(['Créer des réseaux logiques indépendants de la topologie physique.','Transporter des réseaux virtuels sur une infrastructure IP.','Étendre un réseau logique entre plusieurs serveurs ou datacenters.'])+
  h3('Exemple')+
  p('Deux VMs sur deux hyperviseurs différents se voient comme dans le même LAN grâce à VXLAN.')+
  h3('Avantages')+
  p('Flexibilité. Scalabilité. Isolation. Déploiement rapide. Indépendance vis-à-vis de l\u2019underlay.')+
  h3('Inconvénients')+
  p('Complexité. Encapsulation supplémentaire. MTU à adapter. Dépannage plus difficile.')+
  p('Le support SDN consacre une partie aux réseaux Overlay, à Underlay vs Overlay et aux technologies VXLAN, NVGRE et Geneve.')
),
S(24, 's24', 'Réseau Underlay', 'réseau underlay',
  def('L\u2019Underlay est le réseau physique ou IP qui transporte l\u2019Overlay.')+
  h3('Composants')+
  ul(['Switches physiques.','Routeurs.','Liens IP.','Routage.','MTU.','ECMP.','Infrastructure datacenter.'])+
  h3('Rôle')+
  ul(['Transporter les paquets encapsulés.','Assurer la connectivité IP entre VTEP.','Fournir bande passante, résilience et routage.'])+
  piege(['Overlay dépend de l\u2019Underlay. Si l\u2019Underlay est instable, l\u2019Overlay sera instable.','---'])
),
S(25, 's25', 'Overlay vs Underlay', 'overlay vs underlay',
  h3('Overlay')+
  ul(['Réseau virtuel.','Logique.','Indépendant de la topologie physique.','Utilise encapsulation.','Exemples : VXLAN, NVGRE, Geneve.'])+
  h3('Underlay')+
  ul(['Réseau physique/IP.','Transport réel.','Fournit connectivité entre équipements.','Exemples : réseau IP datacenter, routage ECMP.'])+
  h3('Comparaison simple')+
  p('Underlay = routes physiques. Overlay = routes virtuelles au-dessus.')+
  piege(['VXLAN est une technologie Overlay. IP routing entre VTEP appartient à l\u2019Underlay.','---'])
),
S(26, 's26', 'Transport Layer 2 sur Layer 3', 'transport layer 2 sur layer 3',
  h3('Problème')+
  p('Les VLANs classiques sont limités et liés à la couche 2. Les datacenters modernes ont besoin d\u2019étendre des réseaux virtuels à grande échelle.')+
  h3('Solution')+
  p('Transporter des trames Ethernet couche 2 dans des paquets IP couche 3.')+
  h3('Exemple')+
  p('VXLAN encapsule une trame Ethernet dans UDP/IP.')+
  h3('Objectif')+
  p('Permettre à deux machines virtuelles distantes d\u2019être dans le même réseau logique même si l\u2019infrastructure physique est routée en IP.')
),
S(27, 's27', 'VXLAN', 'vxlan',
  def('VXLAN signifie Virtual Extensible LAN. C\u2019est une technologie Overlay qui permet d\u2019étendre des réseaux de couche 2 au-dessus d\u2019un réseau couche 3.')+
  h3('Rôle')+
  ul(['Créer des réseaux virtuels scalables.','Encapsuler Ethernet dans UDP/IP.','Isoler les tenants.','Étendre des segments L2 dans un datacenter.'])+
  h3('Scalabilité')+
  ul(['VLAN classique utilise 12 bits. Environ 4096 VLANs.','VXLAN utilise un VNI 24 bits. Environ 16 millions de réseaux virtuels.'])+
  h3('Port UDP')+
  p('VXLAN utilise généralement UDP 4789.')+
  piege(['VXLAN ne remplace pas l\u2019Underlay. VXLAN a besoin d\u2019un Underlay IP fonctionnel.','---'])
)
]);
