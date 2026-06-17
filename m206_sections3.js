addM206Sections([
S(23, 's23', 'Équivalences des services Cloud', 'équivalences des services cloud',
  h3('VMs (IaaS)')+
  ul(['AWS : EC2.','Azure : Virtual Machines.','GCP : Compute Engine.'])+
  h3('Stockage Objet')+
  ul(['AWS : S3.','Azure : Blob Storage.','GCP : Cloud Storage.'])+
  h3('Réseau virtuel')+
  ul(['AWS : VPC.','Azure : VNet.','GCP : VPC.'])+
  h3('Base de données relationnelle (PaaS)')+
  ul(['AWS : RDS.','Azure : Azure SQL Database.','GCP : Cloud SQL.'])+
  h3('Orchestration Kubernetes')+
  ul(['AWS : EKS.','Azure : AKS.','GCP : GKE.'])
),
S(24, 's24', 'Régions et Zones de disponibilité', 'régions et zones de disponibilité',
  h3('Région')+
  ul(['Zone géographique (ex: Paris, Francfort, US East).','Contient un ou plusieurs datacenters.'])+
  h3('Zone de disponibilité (AZ)')+
  ul(['Un datacenter distinct à l\u2019intérieur d\u2019une région.','Possède sa propre alimentation, climatisation et réseau.','Connectée aux autres zones par réseau fibre rapide.'])+
  h3('Objectif')+
  p('Déployer une application sur 2 zones évite la panne si un datacenter complet brûle ou perd l\u2019électricité.')+
  piege(['Le choix de la région impacte la latence et la conformité légale (RGPD).','---'])
),
S(25, 's25', 'SLA (Service Level Agreement)', 'sla (service level agreement)',
  def('Contrat qui définit le niveau de service attendu, souvent exprimé en pourcentage de disponibilité.')+
  h3('Exemples de SLA')+
  ul(['99% = environ 3 jours d\u2019indisponibilité/an.','99.9% (3 neufs) = environ 8 heures/an.','99.99% (4 neufs) = environ 52 minutes/an.','99.999% (5 neufs) = environ 5 minutes/an.'])+
  h3('Pénalités')+
  p('Si le fournisseur ne respecte pas le SLA, il donne des crédits financiers.')+
  h3('SLA Composite')+
  ul(['Quand une application utilise plusieurs services.','Le SLA global est la multiplication des SLA individuels.'])+
  h4('Exemple')+
  ul(['Web (99.9%) × DB (99.9%) = SLA Composite (99.8%).','Le SLA final est TOUJOURS inférieur au SLA le plus bas de la chaîne.'])+
  piege(['Plus tu as de services dans ton architecture en série, plus le SLA composite baisse.','---'])
),
S(26, 's26', 'Redondance des données', 'redondance des données',
  h3('LRS (Local Redundant Storage)')+
  ul(['Données répliquées 3 fois dans le même datacenter.','Protège contre la panne d\u2019un disque ou d\u2019un rack.','Ne protège pas si le datacenter entier tombe.'])+
  h3('ZRS (Zone Redundant Storage)')+
  ul(['Données répliquées sur 3 zones de disponibilité différentes.','Protège contre la panne d\u2019un datacenter.'])+
  h3('GRS (Geo-Redundant Storage)')+
  ul(['Données répliquées dans une région secondaire très lointaine.','Protège contre une catastrophe régionale (tremblement de terre).'])+
  h3('GZRS (Geo-Zone Redundant Storage)')+
  ul(['Combine ZRS et GRS.','Haute redondance locale et géographique.'])
),
S(27, 's27', 'Sécurité Cloud (Modèle de responsabilité partagée)', 'sécurité cloud (modèle de responsabilité partagée)',
  h3('Principe')+
  p('La sécurité DU cloud est gérée par le fournisseur. La sécurité DANS le cloud est gérée par le client.')+
  h3('IaaS')+
  ul(['Fournisseur sécurise l\u2019hyperviseur et le datacenter.','Client sécurise l\u2019OS, les ports, l\u2019application, les mots de passe.'])+
  h3('SaaS')+
  ul(['Fournisseur sécurise presque tout.','Client gère ses mots de passe et qui a accès à quoi.'])+
  piege(['Peu importe le modèle, la donnée appartient toujours au client. Il est responsable de sa sauvegarde.','---'])
),
S(28, 's28', 'Sécurité des accès Cloud', 'sécurité des accès cloud',
  h3('IAM (Identity and Access Management)')+
  p('Service central pour gérer les utilisateurs, les groupes et les rôles.')+
  h3('RBAC (Role-Based Access Control)')+
  p('Attribuer des permissions selon le rôle de l\u2019utilisateur (ex: Administrateur, Lecteur, Contributeur).')+
  h3('MFA (Multi-Factor Authentication)')+
  p('Ajoute une couche de sécurité (mot de passe + code téléphone). Obligatoire pour les comptes admins.')+
  h3('Moindre privilège')+
  p('Donner uniquement les droits nécessaires pour faire le travail. Jamais plus.')+
  piege(['Le compte "root" ou "global admin" ne doit jamais être utilisé au quotidien.','---'])
),
S(29, 's29', 'Réseau dans le Cloud public', 'réseau dans le cloud public',
  h3('VPC / VNet')+
  p('Réseau virtuel privé isolé pour l\u2019utilisateur.')+
  h3('Sous-réseaux (Subnets)')+
  ul(['Public : accès direct à Internet.','Privé : pas d\u2019accès entrant d\u2019Internet.'])+
  h3('Security Group / NSG')+
  p('Pare-feu virtuel attaché aux VM ou aux sous-réseaux. Contrôle le trafic entrant et sortant (ex: autoriser port 80/443, bloquer port 22).')
),
S(30, 's30', 'Facturation et coûts Cloud', 'facturation et coûts cloud',
  h3('Modèle')+
  p('Pay-as-you-go. Payement à l\u2019usage.')+
  h3('Éléments facturés typiques')+
  ul(['Heure ou minute d\u2019utilisation CPU.','Taille du stockage réservé.','Bande passante SORTANTE (egress).'])+
  h3('Éléments souvent gratuits')+
  ul(['Trafic réseau ENTRANT (ingress).','Création du réseau virtuel basique.'])+
  h3('Alertes de budget')+
  p('Fondamental. Configurer une alerte pour être prévenu si la facture dépasse un certain seuil.')+
  piege(['Attention aux disques orphelins (VM supprimée mais disque conservé = facturé).','---'])
),
S(31, 's31', 'Cloud Privé : Introduction à OpenStack', 'cloud privé : introduction à openstack',
  def('OpenStack est un projet open source permettant de créer et gérer un Cloud privé ou public (IaaS).')+
  h3('Rôle')+
  p('Transformer des serveurs classiques en une infrastructure cloud scalable.')+
  h3('Architecture')+
  p('Modulaire. Composé de plusieurs projets/services indépendants.')+
  h3('Système d\u2019exploitation')+
  p('Fonctionne exclusivement sous Linux.')
),
S(32, 's32', 'Les deux concepts d\u2019architecture OpenStack', 'les deux concepts d\u2019architecture openstack',
  h3('Undercloud')+
  ul(['L\u2019infrastructure qui gère le cloud.','Contient le nœud de direction (Director).','Sert à déployer, surveiller et gérer l\u2019Overcloud.'])+
  h3('Overcloud')+
  ul(['Le cloud lui-même, celui qui est utilisé par les clients.','Comprend les nœuds contrôleurs, les nœuds de calcul, les nœuds de stockage.'])+
  piege(['Undercloud = le boss qui déploie. Overcloud = le cloud final.','---'])
),
S(33, 's33', 'Composants matériels typiques d\u2019un Cloud OpenStack', 'composants matériels typiques d\u2019un cloud openstack',
  h3('Controller Node (Nœud de contrôle)')+
  ul(['Gère l\u2019environnement global.','Héberge les API, la base de données (MariaDB), le bus de messages (RabbitMQ).'])+
  h3('Compute Node (Nœud de calcul)')+
  ul(['Héberge les machines virtuelles.','Exécute l\u2019hyperviseur (souvent KVM).'])+
  h3('Storage Node (Nœud de stockage)')+
  ul(['Fournit l\u2019espace disque.','Stockage bloc, objet ou images.'])+
  h3('Network Node (Nœud réseau)')+
  ul(['Gère le routage, DHCP, L3, metadata.'])
)
]);
