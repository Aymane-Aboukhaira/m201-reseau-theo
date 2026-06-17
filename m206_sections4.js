addM206Sections([
S(34, 's34', 'Projets principaux OpenStack', 'projets principaux openstack',
  h3('Nova')+
  p('Calcul / Compute.')+
  h3('Neutron')+
  p('Réseau / Network.')+
  h3('Cinder')+
  p('Stockage Bloc / Block Storage.')+
  h3('Swift')+
  p('Stockage Objet / Object Storage.')+
  h3('Glance')+
  p('Images système.')+
  h3('Keystone')+
  p('Identité / Identity.')+
  h3('Horizon')+
  p('Interface web / Dashboard.')+
  h3('Heat')+
  p('Orchestration.')+
  h3('Ceilometer')+
  p('Télémétrie et facturation.')
),
S(35, 's35', 'Keystone (Identity Service)', 'keystone (identity service)',
  def('Keystone est le service d\u2019identité d\u2019OpenStack.')+
  h3('Rôle')+
  ul(['Gérer les utilisateurs, les groupes, les projets (tenants), et les rôles.','Fournir des tokens (jetons) d\u2019authentification.','Fournir le catalogue de services (où trouver Nova, Neutron, etc.).'])+
  piege(['Keystone est le cœur de la sécurité. Sans Keystone, aucun autre service ne peut communiquer.','---'])
),
S(36, 's36', 'Glance (Image Service)', 'glance (image service)',
  def('Glance est le catalogue d\u2019images de machines virtuelles.')+
  h3('Rôle')+
  ul(['Stocker et récupérer les images (ex: image Ubuntu, CentOS, Windows).','Fournir les templates de base pour créer une VM via Nova.'])+
  piege(['Glance ne lance pas les VM, il fournit seulement l\u2019image.','---'])
),
S(37, 's37', 'Nova (Compute Service)', 'nova (compute service)',
  def('Nova est le moteur de calcul d\u2019OpenStack.')+
  h3('Rôle')+
  ul(['Créer et gérer le cycle de vie des instances (VMs).','Dialoguer avec l\u2019hyperviseur (souvent KVM) pour allouer le CPU et la RAM.'])+
  piege(['Nova gère le CPU/RAM, pas le réseau ni le stockage persistant.','---'])
),
S(38, 's38', 'Neutron (Networking Service)', 'neutron (networking service)',
  def('Neutron gère tous les aspects réseau virtuels.')+
  h3('Rôle')+
  ul(['Créer des réseaux, des sous-réseaux.','Gérer les routeurs virtuels.','Gérer les adresses IP flottantes (Floating IPs).','Gérer les Security Groups (pare-feu).'])+
  piege(['Neutron est souvent le composant le plus complexe à configurer dans OpenStack.','---'])
),
S(39, 's39', 'Stockage dans OpenStack : Cinder vs Swift', 'stockage dans openstack : cinder vs swift',
  h3('Cinder (Block Storage)')+
  ul(['Fonctionne comme un disque dur ou une clé USB branché à une VM.','Performant pour les bases de données.','Attaché à une seule VM à la fois généralement.'])+
  h3('Swift (Object Storage)')+
  ul(['Fonctionne comme un coffre-fort web (ex: Amazon S3).','On stocke des fichiers (images, vidéos, backups) avec une API ou une URL.','Extrêmement scalable, réplication automatique.','Moins rapide qu\u2019un disque bloc.'])+
  piege(['Base de données = Cinder. Fichier image/backup = Swift.','---'])
),
S(40, 's40', 'Horizon (Dashboard)', 'horizon (dashboard)',
  def('L\u2019interface graphique (web) d\u2019OpenStack.')+
  h3('Rôle')+
  p('Permet aux administrateurs et aux utilisateurs de gérer leurs ressources (lancer une VM, créer un réseau) avec la souris au lieu de lignes de commande.')
),
S(41, 's41', 'Heat (Orchestration)', 'heat (orchestration)',
  def('Heat permet de déployer une infrastructure complète à partir d\u2019un fichier texte (template).')+
  h3('Principe')+
  p('Infrastructure as Code (IaC).')+
  h3('Exemple')+
  p('Un seul fichier décrit "je veux 3 VMs, 1 routeur, 1 réseau et 2 disques". Heat lit le fichier et crée tout automatiquement dans le bon ordre.')
),
S(42, 's42', 'Ceilometer (Telemetry)', 'ceilometer (telemetry)',
  def('Ceilometer mesure l\u2019utilisation des ressources.')+
  h3('Rôle')+
  p('Collecter les données de CPU, bande passante, stockage pour pouvoir facturer le client ou faire des statistiques.')
),
S(43, 's43', 'Concepts pratiques OpenStack', 'concepts pratiques openstack',
  h3('Floating IP (IP flottante)')+
  ul(['C\u2019est une adresse IP publique.','Elle permet à une VM (qui a une IP privée) d\u2019être accessible depuis Internet.'])+
  h3('Security Group')+
  p('C\u2019est un pare-feu au niveau de l\u2019instance. Par défaut, OpenStack bloque tout le trafic entrant. Il faut créer une règle pour ouvrir le port 22 (SSH) ou 80 (HTTP).')+
  h3('Flavor')+
  p('Modèle de dimensionnement d\u2019une VM. (Exemple : "m1.small" = 1 CPU, 2 Go RAM, 20 Go Disque).')
),
S(44, 's44', 'La recette pour lancer une VM sous OpenStack', 'la recette pour lancer une vm sous openstack',
  h3('Il faut obligatoirement')+
  ul(['Une Image (Glance) → ex: Ubuntu.','Un Flavor (Nova) → ex: 2 CPU, 4Go RAM.','Un Réseau (Neutron) → Pour qu\u2019elle ait une IP.','Une Keypair (Nova/Keystone) → Clé SSH pour se connecter sans mot de passe.','Un Security Group (Neutron) → Pour autoriser le port 22 (SSH).'])
)
]);
