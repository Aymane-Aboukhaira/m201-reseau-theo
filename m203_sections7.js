addM203Sections([
S(55, 's55', 'Disponibilité SDN', 'disponibilité sdn',
  h3('Besoin')+
  p('Le contrôleur est central. Il doit être disponible.')+
  h3('Solutions')+
  ul(['Cluster de contrôleurs.','Redondance.','Haute disponibilité.','Sauvegarde de configuration.','Plan de secours.','Contrôle distribué ou hybride.'])+
  h3('Data Plane en cas de panne contrôleur')+
  ul(['Les règles déjà installées peuvent continuer à fonctionner selon configuration.','Les nouveaux flux peuvent poser problème si le switch dépend du contrôleur.'])+
  piege(['La panne du contrôleur n\u2019arrête pas forcément tous les paquets existants, mais elle peut empêcher de nouvelles décisions.','---'])
),
S(56, 's56', 'Scalabilité SDN', 'scalabilité sdn',
  h3('Problèmes possibles')+
  ul(['Trop de flux.','Trop de switches.','Trop de requêtes au contrôleur.','Trop d\u2019événements.','Latence contrôleur.','Taille des tables.'])+
  h3('Solutions')+
  ul(['Contrôleurs distribués.','Cluster.','Règles agrégées.','Politiques par groupe.','Traitement local des flux connus.','Optimisation des tables.'])
),
S(57, 's57', 'SDN et Cloud', 'sdn et cloud',
  h3('Relation')+
  p('Le cloud a besoin de réseaux virtuels dynamiques. SDN permet de créer, supprimer et modifier les réseaux rapidement.')+
  h3('Exemples')+
  ul(['OpenStack Neutron.','VMware NSX.','Azure VNet.','AWS VPC.','Kubernetes networking.'])+
  h3('Rôle')+
  ul(['Créer réseaux par tenant.','Isoler clients.','Automatiser les déploiements.','Connecter VMs et conteneurs.'])
),
S(58, 's58', 'SDN et OpenStack', 'sdn et openstack',
  h3('Neutron')+
  p('Service réseau d\u2019OpenStack. Gère réseaux, sous-réseaux, routeurs, ports, floating IPs et security groups.')+
  h3('OVS')+
  p('Souvent utilisé comme switch virtuel. Connecte les VMs. Gère bridges et tunnels.')+
  h3('VXLAN dans OpenStack')+
  p('Utilisé pour créer des réseaux overlay entre compute nodes. Permet multi-tenancy et scalabilité.')+
  piege(['OpenStack Neutron est un service cloud. OVS est le switch virtuel. VXLAN est le tunnel overlay.','---'])
),
S(59, 's59', 'Protocoles et outils SDN', 'protocoles et outils sdn',
  h3('OpenFlow')+
  p('Protocole SDN Southbound. Communication contrôleur ↔ switches.')+
  h3('VXLAN')+
  p('Technologie overlay. Encapsulation L2 sur L3. Utilise VNI.')+
  h3('NVGRE')+
  p('Technologie overlay via GRE.')+
  h3('Geneve')+
  p('Encapsulation overlay flexible.')+
  h3('LISP')+
  p('Sépare identité et localisation.')+
  h3('VRF')+
  p('Tables de routage indépendantes.')+
  h3('OVSDB')+
  p('Gestion d\u2019Open vSwitch.')+
  h3('NETCONF')+
  p('Configuration réseau structurée.')+
  h3('REST API')+
  p('Communication applicative avec contrôleur.')+
  h3('OpenDaylight')+
  p('Contrôleur SDN open source.')+
  h3('ONOS')+
  p('Contrôleur pour grandes infrastructures.')+
  h3('Ryu')+
  p('Contrôleur Python pour lab et apprentissage.')+
  h3('Open vSwitch')+
  p('Switch virtuel.')+
  h3('Ansible')+
  p('Automatisation de configuration.')+
  h3('Python')+
  p('Scripts d\u2019automatisation et applications SDN.')+
  p('La synthèse SDN récapitule précisément ces protocoles et outils : OpenFlow, VXLAN, NVGRE, LISP, VRF, OVSDB, NetConf, REST API, OpenDaylight, ONOS, Ryu, OVS, Ansible et Python.')
),
S(60, 's60', 'Questions de figure SDN', 'questions de figure sdn',
  h3('Termes à placer')+
  p('Application. NBI. Contrôleur. SBI. OpenFlow. Infrastructure réseau. OVS. ONOS. Postman.')+
  h3('Placement mental')+
  ul(['Applications en haut.','API Nord entre applications et contrôleur.','Contrôleur au centre.','API Sud entre contrôleur et infrastructure.','OpenFlow sur l\u2019API Sud.','Switches/OVS en bas.','Postman côté application.'])+
  h3('Mémo schéma')+
  p('<strong>Application / Postman → API Nord / REST → Contrôleur / ONOS → API Sud / OpenFlow → Infrastructure / OVS</strong>')
),
S(61, 's61', 'Comparaisons clés', 'comparaisons clés',
  h3('SDN vs réseau traditionnel')+
  p('SDN = contrôle centralisé. Traditionnel = contrôle distribué.')+
  h3('Control Plane vs Data Plane')+
  p('Control Plane = décision. Data Plane = transfert.')+
  h3('API Nord vs API Sud')+
  p('API Nord = applications vers contrôleur. API Sud = contrôleur vers équipements.')+
  h3('REST API vs OpenFlow')+
  p('REST API = API applicative. OpenFlow = protocole de contrôle des switches.')+
  h3('Overlay vs Underlay')+
  p('Overlay = réseau virtuel. Underlay = réseau physique/IP.')+
  h3('VLAN vs VXLAN')+
  p('VLAN = 4096 segments environ. VXLAN = 16 millions environ.')+
  h3('vCPE vs uCPE')+
  p('vCPE = fonction virtualisée. uCPE = boîtier physique universel.')+
  h3('EID vs RLOC')+
  p('EID = identité. RLOC = localisation.')+
  h3('SD-WAN vs WAN traditionnel')+
  p('SD-WAN = politiques centralisées et choix dynamique. WAN traditionnel = configuration manuelle et dépendance aux liens classiques.')
),
S(62, 's62', 'Mémo final SDN', 'mémo final sdn',
  ul(['SDN = Software Defined Networking.','SDN = séparation Control Plane / Data Plane.','Control Plane = décision.','Data Plane = transfert.','Contrôleur = cerveau du réseau.','Réseau traditionnel = chaque équipement décide.','Réseau SDN = contrôleur décide, équipements appliquent.','Architecture SDN = Application, Contrôle, Infrastructure.','API Nord = applications ↔ contrôleur.','API Sud = contrôleur ↔ équipements.','REST API = API Nord fréquente.','JSON = format d\u2019échange.','GET = récupérer sans modifier.','Postman = tester les API.','OpenFlow = API Sud.','Flow Table = table de règles.','Flow Rule = match + action + compteur.','Packet-In = switch vers contrôleur.','Flow-Mod = contrôleur installe règle.','OVS = switch virtuel.','OVSDB = gestion OVS.','ONOS = contrôleur.','OpenDaylight = contrôleur open source.','Ryu = contrôleur Python.','Overlay = réseau virtuel.','Underlay = réseau physique/IP.','VXLAN = L2 sur L3.','VNI = identifiant réseau VXLAN.','VTEP = encapsule/décapsule VXLAN.','MAC-in-UDP = principe VXLAN.','UDP 4789 = port VXLAN.','ECMP = plusieurs chemins égaux.','Jumbo Frames = éviter fragmentation VXLAN.','VLAN = 4096.','VXLAN = 16 millions.','CPE = équipement client.','vCPE = fonction CPE virtualisée.','uCPE = boîtier physique universel.','SD-WAN = SDN appliqué au WAN.','Application awareness = choix selon application.','SD-Access = SDN appliqué au campus.','DNA Center = orchestration SD-Access.','LISP = séparation identité/localisation.','EID = identité endpoint.','RLOC = localisation réseau.','VRF = tables de routage séparées.','Migration SDN = Audit, POC, Pilot, Déploiement, Optimisation.','Ansible/Python/REST/NETCONF = automatisation SDN.'])
),
S(63, 's63', 'Pièges d\u2019examen SDN', 'pièges d\u2019examen sdn',
  piege(['SDN ne supprime pas les switches.','SDN sépare décision et transfert.','Control Plane n\u2019est pas Data Plane.','Contrôleur n\u2019est pas dans le plan de données.','OVS appartient au Data Plane.','ONOS appartient au Control Plane.','Postman appartient au plan application.','API Nord n\u2019est pas OpenFlow dans le cas classique.','API Sud est souvent OpenFlow.','GET récupère des informations, il ne modifie pas.','JSON n\u2019est pas un protocole réseau, c\u2019est un format de données.','OpenFlow installe des règles, il ne remplace pas toute l\u2019architecture SDN.','Flow Table contient des règles match/action.','Le contrôleur ne traite pas tous les paquets après installation des règles.','Overlay n\u2019existe pas sans Underlay fonctionnel.','VXLAN n\u2019est pas juste un VLAN plus grand.','VXLAN encapsule Ethernet dans UDP/IP.','VNI ≠ VLAN ID, même si le rôle logique ressemble.','VTEP encapsule et décapsule.','VXLAN ajoute de l\u2019overhead, donc attention MTU.','ECMP aide à répartir le trafic VXLAN.','vCPE = fonction virtualisée.','uCPE = boîtier physique qui héberge les fonctions.','SD-WAN n\u2019est pas seulement un VPN.','SD-Access n\u2019est pas seulement VLAN automatique.','LISP sépare identité et localisation.','EID ne change pas quand l\u2019appareil se déplace.','RLOC change selon la position.','VRF segmente mais ne chiffre pas.','Migration SDN doit être progressive.','POC = test laboratoire, pas production.','Pilot = test limité en production réelle.','Le contrôleur doit être sécurisé et redondé.','---'])
)
]);
