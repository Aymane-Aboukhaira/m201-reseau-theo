addM203Sections([
S(10, 's10', 'Contrôle centralisé, distribué et hybride', 'contrôle centralisé, distribué et hybride',
  h3('Contrôle centralisé')+
  p('Un contrôleur central prend les décisions.')+
  h4('Avantages')+
  ul(['Vue globale.','Administration simple.','Politiques cohérentes.'])+
  h4('Inconvénients')+
  ul(['Risque de point unique de panne si non redondé.','Scalabilité à bien concevoir.'])+
  h3('Contrôle distribué')+
  p('Plusieurs contrôleurs ou équipements partagent les décisions.')+
  h4('Avantages')+
  ul(['Résilience.','Scalabilité.','Moins de dépendance à un seul contrôleur.'])+
  h4('Inconvénients')+
  ul(['Coordination plus complexe.','Cohérence plus difficile.'])+
  h3('Contrôle hybride')+
  p('Combinaison du réseau traditionnel et du SDN. Certains équipements restent traditionnels. Certaines fonctions sont pilotées par contrôleur SDN.')+
  piege(['Migration SDN est souvent progressive, donc l\u2019architecture hybride est fréquente.','---'])
),
S(11, 's11', 'Contrôleurs SDN', 'contrôleurs sdn',
  h3('OpenDaylight')+
  ul(['Contrôleur SDN open source.','Utilisé en recherche et entreprise.','Supporte plusieurs protocoles.','Architecture modulaire.'])+
  h3('OpenContrail')+
  p('Solution SDN orientée cloud et virtualisation réseau. Souvent associée aux environnements de datacenter/cloud.')+
  h3('ONOS')+
  p('Open Network Operating System. Contrôleur open source. Adapté aux grands réseaux et opérateurs.')+
  h3('Ryu')+
  p('Contrôleur SDN en Python. Simple pour labs, apprentissage et expérimentation.')+
  h3('Cisco DNA Center')+
  p('Contrôleur/orchestrateur utilisé dans SD-Access. Permet automatisation, assurance et politiques campus.')+
  h3('Comparaison simple')+
  ul(['OpenDaylight = contrôleur SDN généraliste open source.','ONOS = contrôleur pour grandes infrastructures/opérateurs.','Ryu = apprentissage/lab Python.','Cisco DNA Center = SD-Access campus Cisco.'])
),
S(12, 's12', 'Acteurs SDN', 'acteurs sdn',
  h3('ONF')+
  p('Open Networking Foundation. Organisation importante dans l\u2019évolution du SDN et d\u2019OpenFlow.')+
  h4('Rôle ONF')+
  ul(['Promouvoir les réseaux programmables.','Développer et standardiser OpenFlow.','Encourager l\u2019interopérabilité SDN.'])+
  h3('IETF')+
  p('Internet Engineering Task Force. Organisme de standardisation des protocoles Internet.')+
  h4('Rôle IETF')+
  ul(['Normaliser de nombreux protocoles réseau.','Publier des RFC.','Participer à des protocoles utilisés dans architectures SDN.'])
),
S(13, 's13', 'OpenFlow', 'openflow',
  def('OpenFlow est un protocole SDN utilisé comme API Sud.')+
  h3('Rôle')+
  ul(['Permet la communication entre le contrôleur SDN et les switches OpenFlow.','Permet au contrôleur d\u2019installer, modifier ou supprimer des règles de flux.'])+
  h3('Principe')+
  p('Le switch contient des tables de flux. Chaque règle indique quoi faire avec les paquets correspondants. Le contrôleur installe les règles. Le switch applique les actions.')+
  h3('Type')+
  p('Protocole Southbound. Communication contrôleur ↔ switches.')+
  h3('Utilité')+
  ul(['Programmabilité du forwarding.','Contrôle centralisé des flux.','Automatisation des règles réseau.'])+
  p('Le support SDN place OpenFlow dans la partie “réseaux OpenFlow” avec définition, principe de fonctionnement, anatomie d\u2019un switch OpenFlow et traitement d\u2019un paquet.')
),
S(14, 's14', 'Anatomie d\u2019un switch OpenFlow', 'anatomie d\u2019un switch openflow',
  h3('Flow Table')+
  p('Table contenant les règles de flux.')+
  h3('Règle de flux')+
  p('Une règle contient généralement : match, actions, counters, priority, timeouts.')+
  h3('Match')+
  p('Critères de correspondance. Exemples : Port d\u2019entrée, Adresse MAC source, Adresse MAC destination, Adresse IP source, Adresse IP destination, Protocole, Port TCP/UDP, VLAN.')+
  h3('Action')+
  p('Ce que le switch doit faire si le paquet correspond. Exemples : Forward vers un port, Drop, Envoyer au contrôleur, Modifier un champ, Inonder, Encapsuler selon contexte.')+
  h3('Counters')+
  p('Compteurs statistiques. Exemples : Nombre de paquets, Nombre d\u2019octets, Durée du flux.')+
  h3('Priority')+
  p('Priorité de la règle. Si plusieurs règles correspondent, la plus prioritaire est utilisée.')+
  h3('Timeout')+
  p('Durée de validité de la règle.')
),
S(15, 's15', 'Traitement d\u2019un paquet OpenFlow', 'traitement d\u2019un paquet openflow',
  h3('Étapes')+
  ul(['Un hôte envoie un paquet.','Le paquet arrive sur le switch OpenFlow.','Le switch cherche une règle correspondante dans sa Flow Table.','Si une règle existe, le switch applique l\u2019action.','Si aucune règle n\u2019existe, le switch peut envoyer le paquet au contrôleur.','Le contrôleur analyse le paquet et la topologie.','Le contrôleur calcule une décision.','Le contrôleur installe une Flow Rule dans le switch.','Le switch applique la règle.','Les paquets suivants du même flux sont traités directement par le switch.'])+
  piege(['Le contrôleur ne traite pas tous les paquets un par un. Après installation de la règle, le switch traite localement les paquets du même flux.','---'])
),
S(16, 's16', 'Messages OpenFlow', 'messages openflow',
  h3('Packet-In')+
  p('Message envoyé par le switch au contrôleur lorsqu\u2019il ne sait pas quoi faire d\u2019un paquet.')+
  h3('Packet-Out')+
  p('Message envoyé par le contrôleur au switch pour indiquer une action sur un paquet.')+
  h3('Flow-Mod')+
  p('Message utilisé par le contrôleur pour ajouter, modifier ou supprimer une règle de flux.')+
  h3('Stats Request / Reply')+
  p('Messages pour récupérer les statistiques.')+
  h3('Port Status')+
  p('Message indiquant un changement d\u2019état d\u2019un port.')
),
S(17, 's17', 'Open vSwitch', 'open vswitch',
  def('Open vSwitch, ou OVS, est un switch virtuel open source.')+
  h3('Rôle')+
  ul(['Connecter des machines virtuelles.','Connecter des conteneurs.','Créer des réseaux virtuels.','S\u2019intégrer avec OpenStack, KVM, Xen, VMware selon contextes.'])+
  h3('Utilisation')+
  p('Cloud. Virtualisation. OpenStack Neutron. Réseaux SDN. Labs OpenFlow.')+
  h3('Position dans les plans SDN')+
  p('OVS appartient au plan de données. Il transfère les paquets selon les règles.')+
  h3('OVSDB')+
  p('Protocole ou base de gestion d\u2019Open vSwitch. Permet de configurer OVS. Utilisé pour gérer bridges, ports, tunnels et paramètres.')+
  piege(['OVS = switch virtuel. OVSDB = gestion/configuration d\u2019OVS. OpenFlow = installation de règles de flux.','---'])
),
S(18, 's18', 'Classement dans une figure SDN', 'classement dans une figure sdn',
  h3('OVS')+
  p('Plan de données. Couche infrastructure.')+
  h3('ONOS')+
  p('Plan de contrôle. Couche contrôle.')+
  h3('Postman')+
  p('Plan d\u2019application. Permet d\u2019envoyer des requêtes API.')+
  h3('OpenFlow')+
  p('API Sud. Contrôleur ↔ switch.')+
  h3('REST API')+
  p('API Nord. Application ↔ contrôleur.')+
  h3('Infrastructure réseau')+
  p('Switches, routeurs, OVS, équipements physiques/virtuels.')+
  piege(['Ne pas mettre Postman dans le Data Plane. Ne pas mettre OVS dans le Control Plane. Ne pas mettre OpenFlow comme API Nord.','---'])
)
]);
