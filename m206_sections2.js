addM206Sections([
S(12, 's12', 'Comparaison IaaS / PaaS / SaaS', 'comparaison iaas / paas / saas',
  h3('IaaS')+
  ul(['Contrôle maximum.','Complexité élevée.','Cible : administrateurs système, architectes.'])+
  h3('PaaS')+
  ul(['Contrôle moyen.','Complexité moyenne.','Cible : développeurs.'])+
  h3('SaaS')+
  ul(['Contrôle faible.','Complexité faible.','Cible : utilisateurs finaux.'])+
  memo(['IaaS = tu gères l\u2019OS.','PaaS = tu gères le code.','SaaS = tu utilises le logiciel.'])
),
S(13, 's13', 'Modèles de déploiement Cloud', 'modèles de déploiement cloud',
  h3('Types principaux')+
  ul(['Cloud public.','Cloud privé.','Cloud hybride.'])+
  p('Le support M205 distingue clairement ces trois modèles selon propriété, partage des ressources, coût, contrôle, sécurité, conformité et scalabilité.')
),
S(14, 's14', 'Cloud public', 'cloud public',
  def('Infrastructure cloud fournie par un fournisseur tiers et partagée entre plusieurs clients via Internet.')+
  h3('Fournisseurs')+
  ul(['AWS.','Azure.','GCP.','OVHcloud.','Alibaba Cloud.','IBM Cloud.','DigitalOcean.'])+
  h3('Caractéristiques')+
  ul(['Multi-tenant.','Infrastructure gérée par le fournisseur.','Facturation à l\u2019usage.','Scalabilité très élevée.','Client sans visibilité directe sur l\u2019infrastructure physique.'])+
  h3('Avantages')+
  ul(['Coût faible.','Pas d\u2019infrastructure à acheter.','Ressources disponibles rapidement.','Accès aux technologies avancées.','Scalabilité quasi illimitée.'])+
  h3('Inconvénients')+
  ul(['Contrôle limité.','Dépendance fournisseur.','Problèmes possibles de conformité.','Localisation des données à vérifier.','Risque de mauvaise configuration.'])+
  h3('Exemple')+
  p('Une entreprise héberge son site web sur AWS ou Azure.')
),
S(15, 's15', 'Cloud privé', 'cloud privé',
  def('Infrastructure cloud dédiée exclusivement à une seule organisation.')+
  h3('Caractéristiques')+
  ul(['Single-tenant.','Ressources non partagées avec d\u2019autres clients.','Contrôle total.','Sécurité personnalisable.','Peut être on-premise ou hébergé chez un fournisseur dédié.'])+
  h3('Technologies possibles')+
  ul(['OpenStack.','Azure Stack.','VMware Cloud Foundation.'])+
  h3('Avantages')+
  ul(['Contrôle maximal.','Sécurité forte.','Conformité facilitée.','Souveraineté des données.','Personnalisation complète.'])+
  h3('Inconvénients')+
  ul(['Coût plus élevé.','Maintenance à assurer.','Scalabilité limitée aux ressources physiques.','Besoin d\u2019expertise interne.'])+
  piege(['Cloud privé ≠ simple serveur d\u2019entreprise. Un vrai cloud privé doit aussi avoir les caractéristiques NIST : libre-service, élasticité, mesure du service, ressources partagées dans l\u2019organisation, provisionnement rapide.','---'])
),
S(16, 's16', 'Cloud hybride', 'cloud hybride',
  def('Combinaison d\u2019un cloud privé et d\u2019un cloud public interconnectés.')+
  h3('Principe')+
  ul(['Les données sensibles restent dans le privé.','Les charges variables ou temporaires peuvent aller dans le public.'])+
  h3('Connexions possibles')+
  ul(['VPN.','ExpressRoute.','Direct Connect.','Cloud Interconnect.','Liaisons dédiées.'])+
  h3('Cloud bursting')+
  p('Quand le cloud privé est saturé, le surplus de charge est envoyé vers le cloud public.')+
  h3('Avantages')+
  ul(['Flexibilité.','Optimisation coût/sécurité.','Conformité + scalabilité.','Utilisation du public pour les pics de charge.'])+
  h3('Inconvénients')+
  ul(['Complexité d\u2019intégration.','Sécurité interconnexion.','Supervision plus difficile.','Gestion multi-environnements.'])+
  h3('Exemple')+
  p('Une banque garde les données clients en cloud privé mais lance des analyses marketing sur AWS.')
),
S(17, 's17', 'Virtualisation', 'virtualisation',
  def('La virtualisation est l\u2019abstraction des ressources physiques par une couche logicielle appelée hyperviseur.')+
  h3('Principe')+
  p('Un seul serveur physique peut exécuter plusieurs machines virtuelles indépendantes.')+
  h3('Chaque VM possède')+
  ul(['Son OS.','Ses applications.','Sa mémoire virtuelle.','Ses disques virtuels.','Ses cartes réseau virtuelles.','Son isolation.'])+
  h3('Avantages')+
  ul(['Meilleure utilisation du matériel.','Création rapide d\u2019environnements.','Isolation.','Migration de VMs.','Snapshots.','Réduction du nombre de serveurs physiques.'])+
  h3('Rôle dans le Cloud')+
  p('La virtualisation est une base du cloud IaaS. Elle permet de créer rapidement des VMs à la demande.')
),
S(18, 's18', 'Simulation, émulation, virtualisation', 'simulation, émulation, virtualisation',
  h3('Simulation')+
  p('Reproduit le comportement d\u2019un système par logiciel.')+
  h4('Exemple')+
  p('Simulateur de vol.')+
  h3('Émulation')+
  p('Fournit les fonctions d\u2019un composant sans reproduire sa logique interne.')+
  h4('Exemple')+
  p('Émulateur Game Boy sur PC.')+
  h3('Virtualisation')+
  p('Abstraction permettant l\u2019exécution de plusieurs OS/applications sur le même matériel.')+
  h4('Exemple')+
  p('VMware, Hyper-V, KVM.')+
  piege(['Dans l\u2019examen, ne pas confondre émulation (logiciel lent, architecture différente) et virtualisation (proche du matériel, très rapide).','---'])
),
S(19, 's19', 'Hyperviseur', 'hyperviseur',
  def('Couche logicielle qui permet la création et la gestion des machines virtuelles.')+
  h3('Type 1 (Bare-Metal)')+
  ul(['S\u2019installe directement sur le matériel physique.','Plus performant.','Plus sécurisé.','Exemples : VMware ESXi, Microsoft Hyper-V, KVM, Xen.'])+
  h3('Type 2 (Hosted)')+
  ul(['S\u2019installe sur un système d\u2019exploitation existant (Windows, Linux, macOS).','Moins performant.','Utilisé pour les tests ou le poste de travail.','Exemples : VMware Workstation, VirtualBox.'])+
  piege(['Le cloud utilise des hyperviseurs de Type 1 (KVM, Hyper-V, Xen personnalisé).','---'])
),
S(20, 's20', 'VM vs Conteneur', 'vm vs conteneur',
  h3('Machine Virtuelle (VM)')+
  ul(['Abstraction matérielle.','Inclut un OS invité complet.','Plus lourd.','Démarrage lent (minutes).','Forte isolation.'])+
  h3('Conteneur')+
  ul(['Abstraction de l\u2019OS.','Partage le noyau (kernel) de l\u2019hôte.','Plus léger.','Démarrage très rapide (secondes).','Isolation plus faible que la VM.'])+
  h3('Quand utiliser quoi ?')+
  ul(['VM = besoin d\u2019un OS différent, besoin de forte sécurité, applications legacy.','Conteneur = microservices, déploiement rapide, cloud-native.'])+
  piege(['Conteneur = partage le kernel. VM = virtualise le hardware.','---'])
),
S(21, 's21', 'Docker et Kubernetes', 'docker et kubernetes',
  h3('Docker')+
  ul(['Outil de création et d\u2019exécution de conteneurs.','Packt l\u2019application et ses dépendances dans une image.','Garantit que l\u2019application fonctionnera partout de la même manière.'])+
  h3('Kubernetes (K8s)')+
  ul(['Outil d\u2019orchestration de conteneurs.','Ne crée pas les conteneurs (Docker le fait).','Gère le déploiement.','Gère la scalabilité.','Gère le redémarrage en cas de panne.','Gère le load balancing entre conteneurs.'])+
  piege(['Docker construit le conteneur. Kubernetes gère 1000 conteneurs.','---'])
),
S(22, 's22', 'Fournisseurs Cloud Public (Les leaders)', 'fournisseurs cloud public (les leaders)',
  h3('AWS (Amazon Web Services)')+
  p('Leader historique. Plus grande part de marché.')+
  h3('Microsoft Azure')+
  p('Fortement intégré à l\u2019écosystème Windows/Microsoft.')+
  h3('GCP (Google Cloud Platform)')+
  p('Fort sur les données, le Machine Learning et Kubernetes.')+
  h3('Autres')+
  p('OVHcloud, IBM Cloud, Oracle Cloud, Alibaba Cloud.')
)
]);
