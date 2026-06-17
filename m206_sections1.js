addM206Sections([
S(1, 's1', 'Introduction au Cloud Computing', 'introduction au cloud computing',
  def('Le Cloud Computing est un modèle informatique qui permet d\u2019accéder via le réseau à un ensemble partagé de ressources informatiques configurables.')+
  h3('Ressources cloud')+
  ul(['Réseaux.','Serveurs.','Stockage.','Applications.','Services.','Bases de données.','Machines virtuelles.','Conteneurs.'])+
  h3('Idée centrale')+
  p('<strong>Demander → Provisionner → Utiliser → Mesurer → Adapter → Libérer</strong>')+
  h3('Définition NIST')+
  p('Le Cloud Computing permet un accès réseau omniprésent, pratique et à la demande à des ressources informatiques partagées, configurables, rapidement provisionnées et libérées avec un minimum d\u2019effort de gestion ou d\u2019interaction avec le fournisseur.')+
  h3('Mots-clés à retenir')+
  ul(['À la demande.','Partagé.','Configurable.','Provisionnement rapide.','Minimum d\u2019intervention humaine.','Paiement selon usage.','Accès via réseau.','Élasticité.'])
),
S(2, 's2', 'Pourquoi le Cloud existe', 'pourquoi le cloud existe',
  h3('Problème des infrastructures classiques')+
  ul(['Les entreprises devaient acheter : serveurs, racks, routeurs, switches, câblage, climatisation, onduleurs, licences, salles informatiques, sécurité physique.'])+
  h3('Limites des datacenters classiques')+
  ul(['Coût initial élevé.','Maintenance lourde.','Ressources parfois sous-utilisées.','Scalabilité lente.','Achat de matériel long.','Besoin d\u2019experts.','Risque de panne locale.','Difficulté à absorber les pics de charge.'])+
  h3('Réponse du Cloud')+
  ul(['Le Cloud permet de louer les ressources nécessaires au lieu de les acheter.','Les ressources peuvent être créées rapidement.','Les ressources peuvent être supprimées quand elles ne sont plus nécessaires.','L\u2019entreprise paie selon la consommation réelle.'])
),
S(3, 's3', 'Data Center classique', 'data center classique',
  def('Un Data Center est un lieu regroupant des serveurs, équipements réseau, stockage et systèmes de télécommunication.')+
  h3('Composants physiques')+
  ul(['Racks.','Serveurs.','Switches.','Routeurs.','Câblage.','Stockage.','Climatisation.','Onduleurs UPS.','Groupes électrogènes.','Système anti-incendie.','Contrôle d\u2019accès physique.','Caméras.','Plancher technique.'])+
  h3('Allées froides / chaudes')+
  h4('Allée froide')+
  p('Zone où l\u2019air froid arrive devant les serveurs.')+
  h4('Allée chaude')+
  p('Zone où l\u2019air chaud sort derrière les serveurs.')+
  h3('Objectif')+
  ul(['Éviter la recirculation d\u2019air chaud.','Maintenir une température correcte.','Protéger les composants.','Réduire les pannes.'])+
  h3('Coûts principaux d\u2019un Data Center')+
  ul(['Acquisition ou location d\u2019espace.','Achat des équipements.','Exploitation quotidienne.'])+
  h3('Coûts d\u2019exploitation')+
  ul(['Électricité.','Climatisation.','Maintenance.','Prestataires.','Télécommunications.','Sécurité.','Renouvellement matériel.'])
),
S(4, 's4', 'CAPEX et OPEX', 'capex et opex',
  h3('CAPEX')+
  ul(['Capital Expenditure.','Dépense d\u2019investissement immobilisée.'])+
  h3('Exemples CAPEX')+
  ul(['Achat de serveurs.','Achat de racks.','Achat de câbles.','Achat de licences.','Achat d\u2019onduleurs.','Construction d\u2019une salle serveur.'])+
  h3('OPEX')+
  ul(['Operational Expenditure.','Dépense d\u2019exploitation récurrente.'])+
  h3('Exemples OPEX')+
  ul(['Abonnement cloud.','Facturation mensuelle.','Paiement selon usage.','Heures de VM.','Stockage consommé.','Bande passante utilisée.'])+
  h3('Avantage cloud')+
  ul(['Le cloud transforme souvent le CAPEX en OPEX.','Une PME n\u2019a pas besoin d\u2019investir massivement au départ.','Elle paie les ressources selon son activité.'])+
  piege(['L\u2019avantage économique du cloud n\u2019est pas seulement “moins cher”. L\u2019avantage est surtout : pas d\u2019investissement initial massif, paiement à l\u2019usage, prévisibilité, élasticité, économies d\u2019échelle.','---'])
),
S(5, 's5', 'Les 5 caractéristiques NIST du Cloud', 'les 5 caractéristiques nist du cloud',
  memo(['LLMEM'])+
  ul(['Libre-service à la demande.','Large accès réseau.','Mise en commun des ressources.','Élasticité rapide.','Mesure du service.'])+
  p('Ces 5 caractéristiques définissent ce qui fait qu\u2019un service est réellement un cloud.')+
  h3('5.1 Libre-service à la demande')+
  p('L\u2019utilisateur peut créer ou modifier ses ressources lui-même. Il n\u2019a pas besoin d\u2019attendre l\u2019intervention humaine du fournisseur.')+
  h4('Exemple')+
  ul(['Créer une VM en quelques clics.','Augmenter la RAM d\u2019une instance.','Créer un stockage depuis un portail.'])+
  h3('5.2 Large accès réseau')+
  p('Les services cloud sont accessibles via le réseau.')+
  h4('Accès possible depuis')+
  ul(['PC.','Téléphone.','Tablette.','Navigateur web.','Client distant.','API.'])+
  p('<strong>Idée clé :</strong> Le cloud est accessible depuis n\u2019importe quel appareil connecté et autorisé.')+
  h3('5.3 Mise en commun des ressources')+
  p('Les ressources physiques sont partagées entre plusieurs clients.')+
  h4('Principe')+
  ul(['Multi-tenant.','Même infrastructure physique.','Isolation logique entre clients.'])+
  h4('Exemple')+
  p('Plusieurs entreprises utilisent les mêmes serveurs physiques AWS/Azure/GCP sans se voir.')+
  h3('5.4 Élasticité rapide')+
  p('Les ressources augmentent ou diminuent selon les besoins.')+
  h4('Exemple')+
  p('Un site e-commerce ajoute des serveurs pendant Black Friday. Après le pic, les serveurs sont supprimés. L\u2019entreprise ne paie pas les ressources inutiles.')+
  h4('Types de scalabilité')+
  ul(['<strong>Scalabilité verticale :</strong> Augmenter la puissance d\u2019une machine existante (plus de CPU, plus de RAM).','<strong>Scalabilité horizontale :</strong> Ajouter plus de machines (plusieurs instances derrière un load balancer).'])+
  h3('5.5 Mesure du service')+
  p('L\u2019utilisation est mesurée, surveillée et facturée.')+
  h4('Ressources mesurées')+
  ul(['Heures de VM.','CPU.','RAM.','Stockage.','Bande passante.','Requêtes.','Snapshots.','Bases de données.'])+
  h4('Objectif')+
  ul(['Facturer selon l\u2019utilisation réelle.','Donner de la visibilité sur les coûts.','Optimiser la consommation.'])
),
S(6, 's6', 'Avantages du Cloud', 'avantages du cloud',
  h3('Réduction des coûts')+
  ul(['Moins d\u2019achat matériel.','Moins de maintenance physique.','Paiement à l\u2019usage.','Économies d\u2019échelle.'])+
  h3('Scalabilité')+
  p('Possibilité d\u2019augmenter ou diminuer rapidement les ressources.')+
  h3('Élasticité')+
  p('Adaptation automatique ou rapide à la charge.')+
  h3('Mobilité')+
  p('Accès depuis différents lieux et appareils.')+
  h3('Haute disponibilité')+
  ul(['Fournisseurs cloud utilisent : datacenters redondants, zones de disponibilité, réplication, mécanismes de basculement.'])+
  h3('Fiabilité')+
  ul(['Infrastructure surveillée.','SLA fournis.','Maintenance professionnelle.'])+
  h3('Sécurité mutualisée')+
  ul(['Les grands fournisseurs investissent dans : chiffrement, MFA, RBAC, surveillance, certifications, réponse aux incidents.'])+
  h3('Rapidité')+
  ul(['Création de ressources en quelques minutes.','Déploiement rapide.','Tests plus faciles.'])+
  h3('Innovation')+
  ul(['Accès rapide à : IA, Big Data, Machine Learning, conteneurs, serverless, bases de données managées.'])
),
S(7, 's7', 'Risques et limites du Cloud', 'risques et limites du cloud',
  h3('Dépendance fournisseur')+
  ul(['Vendor lock-in.','Difficile de migrer d\u2019un cloud à un autre.'])+
  h3('Coûts mal contrôlés')+
  ul(['Ressources oubliées.','Surconsommation.','Snapshots inutiles.','Bande passante élevée.','Mauvais dimensionnement.'])+
  h3('Sécurité mal configurée')+
  ul(['Stockage public par erreur.','Clés exposées.','RBAC trop large.','MFA non activé.','Règles réseau permissives.'])+
  h3('Conformité')+
  ul(['Données personnelles.','Localisation des données.','Règlementation sectorielle.','Souveraineté numérique.'])+
  h3('Perte de contrôle physique')+
  p('Le client ne contrôle pas directement les serveurs physiques dans le cloud public.')+
  h3('Disponibilité dépendante du fournisseur')+
  ul(['Panne régionale.','Panne zone.','Panne service.','Erreur fournisseur.'])
),
S(8, 's8', 'Modèles de service Cloud', 'modèles de service cloud',
  h3('Idée principale')+
  p('La question clé est : <strong>Qui gère quoi ?</strong>')+
  p('Les trois modèles principaux sont IaaS, PaaS et SaaS. Le support M205 insiste sur cette distinction de responsabilité entre fournisseur et client.')
),
S(9, 's9', 'IaaS', 'iaas',
  def('IaaS signifie Infrastructure as a Service.')+
  h3('Rôle')+
  p('Fournir des ressources d\u2019infrastructure virtualisées.')+
  h3('Le fournisseur gère')+
  ul(['Matériel physique.','Datacenter.','Réseau physique.','Stockage physique.','Virtualisation.'])+
  h3('Le client gère')+
  ul(['Système d\u2019exploitation.','Middleware.','Applications.','Données.','Sécurité OS.','Mises à jour OS.','Configuration applicative.'])+
  h3('Exemples')+
  ul(['Amazon EC2.','Azure Virtual Machines.','Google Compute Engine.'])+
  h3('Usage')+
  ul(['Créer des VMs.','Migrer des serveurs existants.','Garder un contrôle élevé.','Héberger une application personnalisée.'])+
  piege(['IaaS ≠ location d\u2019un serveur physique. IaaS = ressources virtualisées, flexibles et facturées à l\u2019usage.','---'])
),
S(10, 's10', 'PaaS', 'paas',
  def('PaaS signifie Platform as a Service.')+
  h3('Rôle')+
  p('Fournir une plateforme prête pour développer et déployer des applications.')+
  h3('Le fournisseur gère')+
  ul(['Infrastructure.','Virtualisation.','Système d\u2019exploitation.','Middleware.','Runtime.','Frameworks.','Mises à jour de plateforme.'])+
  h3('Le client gère')+
  ul(['Code applicatif.','Données.','Paramètres applicatifs.'])+
  h3('Exemples')+
  ul(['Azure App Service.','Google App Engine.','AWS Elastic Beanstalk.','Heroku.'])+
  h3('Usage')+
  ul(['Développer une application sans gérer les serveurs.','Déployer rapidement.','Se concentrer sur le code.'])+
  piege(['PaaS = développeur se concentre sur l\u2019application, pas sur Linux/Windows.','---'])
),
S(11, 's11', 'SaaS', 'saas',
  def('SaaS signifie Software as a Service.')+
  h3('Rôle')+
  p('Fournir une application prête à l\u2019emploi via navigateur ou client.')+
  h3('Le fournisseur gère')+
  p('Tout : infrastructure, OS, middleware, application, mises à jour, sécurité plateforme, disponibilité.')+
  h3('Le client gère')+
  ul(['Utilisation.','Paramètres de base.','Comptes et permissions selon l\u2019application.','Données saisies.'])+
  h3('Exemples')+
  ul(['Gmail.','Microsoft 365.','Google Workspace.','Salesforce.','Netflix.','Microsoft Teams.'])+
  h3('Usage')+
  p('Utiliser une application directement sans installation serveur.')+
  piege(['SaaS = produit fini. Le client utilise, il ne construit pas l\u2019infrastructure.','---'])
)
]);
