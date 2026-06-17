addM203Sections([
S(1, 's1', 'Introduction au SDN', 'introduction au sdn',
  def('SDN signifie <strong>Software Defined Networking</strong>. C\u2019est une architecture réseau qui sépare le plan de contrôle du plan de données.')+
  h3('Idée centrale')+
  p('Dans un réseau traditionnel, chaque équipement décide et transfère. Dans un réseau SDN, le contrôleur décide et les équipements appliquent.')+
  h3('Phrase à mémoriser')+
  p('<strong>SDN = contrôle centralisé + réseau programmable + automatisation.</strong>')+
  h3('Problème résolu')+
  ul(['Dans un réseau traditionnel, chaque routeur ou switch doit être configuré séparément.','Chaque équipement possède sa propre intelligence.','La gestion devient complexe à grande échelle.'])+
  h3('Solution SDN')+
  p('L\u2019intelligence du réseau est centralisée dans un contrôleur logiciel. Les équipements deviennent plus simples. Le réseau devient programmable, flexible et automatisé. Le support SDN définit justement SDN comme la séparation du Control Plane et du Data Plane, avec une intelligence centralisée dans un contrôleur logiciel.')
),
S(2, 's2', 'Réseau traditionnel vs SDN', 'réseau traditionnel vs sdn',
  h3('Réseau traditionnel')+
  ul(['Chaque équipement prend ses propres décisions.','Chaque routeur possède son plan de contrôle.','Chaque switch/routeur possède aussi son plan de données.','La configuration se fait équipement par équipement.','L\u2019administration est plus manuelle.','La visibilité globale est limitée.'])+
  h3('Réseau SDN')+
  ul(['Le contrôleur central prend les décisions.','Les équipements appliquent les règles reçues.','Le réseau est programmable via API.','La configuration est centralisée.','L\u2019automatisation devient possible.','La visibilité globale est meilleure.'])+
  h3('Comparaison simple')+
  p('Réseau traditionnel = intelligence distribuée dans chaque équipement. Réseau SDN = intelligence centralisée dans un contrôleur.')+
  piege(['SDN ne veut pas dire que les switches disparaissent. Les switches restent présents, mais leur rôle principal devient le transfert selon les règles installées.','---'])
),
S(3, 's3', 'Objectifs du SDN', 'objectifs du sdn',
  h3('Simplifier l\u2019administration')+
  ul(['Configuration depuis un contrôleur central.','Moins de configuration manuelle équipement par équipement.'])+
  h3('Améliorer la flexibilité')+
  ul(['Les changements réseau peuvent être faits rapidement par logiciel.','Les politiques peuvent être modifiées depuis une interface centrale.'])+
  h3('Automatiser la gestion')+
  ul(['Scripts.','Applications.','API.','Playbooks.','Politiques centralisées.'])+
  h3('Réduire les coûts')+
  ul(['Équipements simplifiés.','Moins d\u2019intervention humaine.','Gestion plus rapide.','Moins d\u2019erreurs de configuration.'])+
  h3('Améliorer la visibilité')+
  ul(['Le contrôleur connaît la topologie.','Le contrôleur peut voir les flux.','Le contrôleur peut appliquer des politiques globales.'])
),
S(4, 's4', 'Applications du SDN', 'applications du sdn',
  h3('Data Centers')+
  ul(['Gestion du trafic entre serveurs et machines virtuelles.','Réseaux virtuels dynamiques.','Automatisation des déploiements.'])+
  h3('Cloud Computing')+
  ul(['Création rapide de réseaux virtuels.','Isolation entre clients.','Intégration avec OpenStack, VMware, Azure, AWS.'])+
  h3('Virtualisation réseau')+
  ul(['Plusieurs réseaux virtuels sur la même infrastructure physique.','Overlay au-dessus de l\u2019underlay.'])+
  h3('WAN d\u2019entreprise')+
  ul(['Optimisation des communications entre agences.','Routage intelligent selon la qualité des liens.','SD-WAN.'])+
  h3('Campus d\u2019entreprise')+
  ul(['Automatisation du réseau d\u2019accès.','Segmentation par identité.','SD-Access.'])
),
S(5, 's5', 'Plans SDN', 'plans sdn',
  h3('Control Plane')+
  p('Plan de contrôle. C\u2019est la partie qui décide.')+
  h4('Rôle')+
  ul(['Calculer les chemins.','Gérer la topologie.','Définir les politiques.','Décider des règles de forwarding.','Gérer les flux.','Communiquer avec les applications et équipements.'])+
  h3('Data Plane')+
  p('Plan de données. C\u2019est la partie qui transfère.')+
  h4('Rôle')+
  ul(['Transférer les paquets.','Appliquer les règles installées.','Utiliser les tables de flux.','Envoyer certains paquets au contrôleur si aucune règle ne correspond.'])+
  h3('Management Plane')+
  p('Plan de gestion. Sert à configurer, superviser et administrer les équipements.')+
  h4('Rôle')+
  ul(['Configuration.','Monitoring.','Logs.','Supervision.','Administration.'])+
  h3('Découplage SDN')+
  p('Le Control Plane est déplacé vers le contrôleur. Le Data Plane reste dans les switches/routeurs. Le contrôleur installe les règles dans les équipements.')+
  piege(['Control Plane = décision. Data Plane = transfert. Management Plane = administration.','---'])
),
S(6, 's6', 'Architecture SDN en 3 couches', 'architecture sdn en 3 couches',
  h3('Couche application')+
  p('Contient les applications réseau.')+
  h4('Exemples')+
  ul(['Sécurité.','Supervision.','Load balancing.','Orchestration.','QoS.','Analyse trafic.','Automatisation.'])+
  h3('Couche contrôle')+
  p('Contient le contrôleur SDN. C\u2019est le cerveau du réseau.')+
  h4('Rôle')+
  ul(['Recevoir les demandes des applications.','Analyser la topologie.','Calculer les chemins.','Installer les règles dans les équipements.','Superviser l\u2019état du réseau.'])+
  h3('Couche infrastructure')+
  p('Contient les équipements réseau.')+
  h4('Exemples')+
  ul(['Switches physiques.','Routeurs.','Open vSwitch.','Switches OpenFlow.','Équipements de forwarding.'])+
  h3('Relation entre couches')+
  p('Application → demande un service réseau. Contrôleur → décide et traduit la demande. Infrastructure → applique les règles et transfère le trafic.')+
  p('Le support SDN structure l\u2019architecture autour de trois couches : Application, Contrôle et Infrastructure.')
),
S(7, 's7', 'API Nord et API Sud', 'api nord et api sud',
  h3('API Nord')+
  ul(['Northbound API.','Interface entre la couche application et le contrôleur SDN.'])+
  h3('Rôle API Nord')+
  ul(['Permet aux applications de demander des services réseau au contrôleur.','Expose les fonctions du contrôleur aux applications.','Permet l\u2019automatisation et la programmabilité.'])+
  h3('Exemples API Nord')+
  ul(['REST API.','JSON.','Python scripts.','Applications de sécurité.','Applications de monitoring.'])+
  h3('API Sud')+
  ul(['Southbound API.','Interface entre le contrôleur SDN et les équipements réseau.'])+
  h3('Rôle API Sud')+
  ul(['Permet au contrôleur de communiquer avec les switches et routeurs.','Permet d\u2019installer des règles de forwarding.','Permet de récupérer l\u2019état des équipements.'])+
  h3('Exemples API Sud')+
  ul(['OpenFlow.','NETCONF.','OVSDB.','P4Runtime selon architectures modernes.'])+
  h3('Comparaison')+
  p('API Nord = applications ↔ contrôleur. API Sud = contrôleur ↔ équipements.')+
  piege(['REST/JSON est généralement lié à l\u2019API Nord. OpenFlow est généralement lié à l\u2019API Sud.','---'])
),
S(8, 's8', 'API REST, JSON et Postman', 'api rest, json et postman',
  h3('REST API')+
  p('Interface web utilisant HTTP. Permet aux applications de communiquer avec le contrôleur SDN.')+
  h3('Méthodes REST')+
  ul(['<strong>GET</strong> : Récupérer une information. Ne modifie pas la ressource.','<strong>POST</strong> : Créer une nouvelle ressource. Envoyer une configuration.','<strong>PUT</strong> : Modifier ou remplacer une ressource existante.','<strong>DELETE</strong> : Supprimer une ressource.'])+
  h3('JSON')+
  ul(['Format léger de données.','Lisible par humain et machine.','Utilisé souvent avec REST API.'])+
  h3('Rôle de JSON en SDN')+
  ul(['Échanger des informations structurées.','Décrire des objets réseau.','Transporter des réponses API.'])+
  h3('Postman')+
  p('Outil permettant de tester des API REST.')+
  h4('Usage en SDN')+
  ul(['Envoyer une requête au contrôleur.','Afficher la topologie.','Lister les switches.','Lister les hôtes.','Voir les flux.','Tester GET, POST, PUT, DELETE.'])+
  h3('Dans une figure SDN')+
  p('Postman appartient au plan d\u2019application. Il envoie des requêtes API vers le contrôleur.')
),
S(9, 's9', 'Contrôleur SDN', 'contrôleur sdn',
  def('Le contrôleur SDN est le cerveau du réseau.')+
  h3('Rôle')+
  ul(['Centraliser le plan de contrôle.','Avoir une vue globale du réseau.','Prendre les décisions.','Installer les règles dans les équipements.','Exposer des API aux applications.','Collecter l\u2019état du réseau.'])+
  h3('Fonctions')+
  ul(['Découverte topologie.','Calcul des chemins.','Gestion des flux.','Gestion des politiques.','Automatisation.','Communication nord/sud.'])+
  h3('Avantages')+
  ul(['Administration centralisée.','Meilleure visibilité.','Automatisation.','Cohérence des règles.','Déploiement rapide.'])+
  piege(['Risque : Point critique de contrôle. Doit être sécurisé et redondé. Un contrôleur mal protégé peut compromettre tout le réseau.','---'])
)
]);
