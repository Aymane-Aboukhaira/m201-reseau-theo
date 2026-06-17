addM206Sections([
S(45, 's45', 'Automatisation et IaC (Infrastructure as Code)', 'automatisation et iac (infrastructure as code)',
  h3('Pourquoi l\u2019automatisation ?')+
  ul(['Dans un datacenter de 10 serveurs, configurer à la main est possible.','Dans un cloud de 1000 serveurs, c\u2019est impossible.'])+
  h3('Infrastructure as Code (IaC)')+
  ul(['Concept qui consiste à décrire l\u2019infrastructure (serveurs, réseaux) dans un fichier texte (code).','Ce fichier est exécuté par un outil qui déploie tout automatiquement.','Garantit que le résultat sera exactement le même à chaque fois (Idempotence).'])
),
S(46, 's46', 'Idempotence', 'idempotence',
  def('Propriété fondamentale de l\u2019IaC. L\u2019exécution répétée du même code sur le même environnement donne toujours le même résultat.')+
  h3('Exemple')+
  p('Si le code dit "installer Apache", l\u2019outil vérifie. Si Apache est déjà là, il ne fait rien. S\u2019il n\u2019est pas là, il l\u2019installe.')
),
S(47, 's47', 'Ansible', 'ansible',
  def('Outil d\u2019automatisation et de gestion de configuration très populaire, propriété de Red Hat.')+
  h3('Caractéristiques majeures')+
  ul(['Agentless (Sans agent) : Rien à installer sur les serveurs cibles.','Push : Le serveur de contrôle pousse la configuration vers les cibles.','Protocole : Utilise SSH (Linux) ou WinRM (Windows).','Langage : Utilise YAML (très lisible).'])+
  h3('Playbook')+
  p('Fichier YAML qui contient les instructions (tâches) à exécuter.')+
  h3('Inventory (Inventaire)')+
  p('Fichier texte qui liste les adresses IP des serveurs cibles.')+
  piege(['Ansible = Push, Sans agent, YAML, SSH.','---'])
),
S(48, 's48', 'Puppet', 'puppet',
  def('Ancien outil de gestion de configuration, très robuste pour les parcs massifs.')+
  h3('Caractéristiques majeures')+
  ul(['Agent basé (Agent-based) : Il faut installer le logiciel "Puppet Agent" sur chaque cible.','Pull : Les agents interrogent le serveur central (Puppet Master) pour récupérer leur configuration.','Langage : Utilise son propre langage (Puppet DSL).'])+
  piege(['Puppet = Pull, Avec agent, Ruby/DSL.','---'])
),
S(49, 's49', 'Comparaison Ansible / Puppet', 'comparaison ansible / puppet',
  h3('Ansible')+
  ul(['Sans agent.','Architecture Push.','Langage YAML (facile).','Déploiement plus rapide au début.'])+
  h3('Puppet')+
  ul(['Avec agent.','Architecture Pull.','Langage DSL (plus dur).','Bon pour la conformité stricte continue.'])+
  memo(['Ansible = Push/Agentless. Puppet = Pull/Agent.'])
),
S(50, 's50', 'Format YAML', 'format yaml',
  def('YAML Ain\'t Markup Language. Format de sérialisation de données utilisé par Ansible, Kubernetes, Docker Compose, Heat.')+
  h3('Règle d\u2019or absolue')+
  p('L\u2019indentation est vitale. Elle DOIT être faite avec des ESPACES (souvent 2), JAMAIS avec des tabulations.')+
  h3('Structure')+
  ul(['Dictionnaire : <code>clé: valeur</code>','Liste : chaque élément commence par un tiret <code>-</code>'])+
  piege(['Une erreur d\u2019un seul espace en YAML casse tout le script. Pas de TAB !','---'])
),
S(51, 's51', 'Autres outils de l\u2019écosystème IaC', 'autres outils de l\u2019écosystème iac',
  h3('Terraform')+
  p('Outil de HashiCorp pour provisionner l\u2019infrastructure (créer les VM, les réseaux). Leader du marché multi-cloud.')+
  h3('Différence Terraform / Ansible')+
  ul(['Terraform construit la maison (crée la VM).','Ansible meuble la maison (installe les logiciels dans la VM).'])
),
S(52, 's52', 'Notions de base Cloud Native', 'notions de base cloud native',
  h3('Microservices')+
  ul(['Découper une grosse application (monolithe) en plein de petits services indépendants.','Exemple : Un service gère le panier, un autre le paiement, un autre le catalogue.','Avantage : Si le paiement tombe en panne, le catalogue marche toujours.'])+
  h3('Serverless (Sans serveur)')+
  ul(['Le développeur écrit juste une fonction de code.','Le cloud l\u2019exécute quand un événement se produit.','Le développeur ne gère aucune VM.','Facturé à la milliseconde.','Exemples : AWS Lambda, Azure Functions.'])+
  piege(['Serverless ne veut pas dire qu\u2019il n\u2019y a plus de serveurs physiques. Cela veut dire que le client ne les gère plus du tout.','---'])
),
S(53, 's53', 'Méthodes de migration vers le Cloud', 'méthodes de migration vers le cloud',
  h3('Rehosting (Lift and Shift)')+
  p('Prendre la VM locale et la copier telle quelle dans le Cloud (IaaS). Rapide mais n\u2019optimise pas les coûts.')+
  h3('Refactoring / Rearchitecting')+
  p('Réécrire l\u2019application pour qu\u2019elle utilise des services Cloud Natifs (PaaS, Microservices). Long mais très optimisé.')+
  h3('Repurchasing')+
  p('Abandonner l\u2019application locale et acheter un SaaS équivalent (ex: passer d\u2019Exchange local à Microsoft 365).')
),
S(54, 's54', 'Vocabulaire Cloud en Vrac', 'vocabulaire cloud en vrac',
  h3('Tenant (Locataire)')+
  p('Un client dans un environnement cloud.')+
  h3('Instance')+
  p('Le mot "Cloud" pour dire Machine Virtuelle.')+
  h3('Snapshot')+
  p('Photo de l\u2019état d\u2019un disque à l\u2019instant T. Permet un retour en arrière rapide.')+
  h3('Scale Up / Scale Down')+
  p('Augmenter / diminuer la puissance d\u2019une VM (Vertical).')+
  h3('Scale Out / Scale In')+
  p('Ajouter / retirer des VMs (Horizontal).')
),
S(55, 's55', 'Questions typiques d\u2019examen Cloud', 'questions typiques d\u2019examen cloud',
  ul(['<strong>Quelle est la différence entre IaaS et PaaS ?</strong> (Réponse : Dans l\u2019IaaS on gère l\u2019OS, dans le PaaS le fournisseur gère l\u2019OS).','<strong>Qu\u2019est-ce qu\u2019un Cloud Privé ?</strong> (Réponse : Ressources dédiées à une seule organisation).','<strong>Quels sont les avantages de la virtualisation ?</strong> (Réponse : Consolidation matérielle, isolation, snapshots).','<strong>Qu\u2019est-ce que l\u2019élasticité ?</strong> (Réponse : Capacité du système à s\u2019adapter automatiquement à la charge de travail).','<strong>Quelle est la différence entre Ansible et Puppet ?</strong> (Réponse : Ansible Push/Agentless/YAML, Puppet Pull/Agent/DSL).'])
)
]);
