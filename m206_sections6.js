addM206Sections([
S(56, 's56', 'Glossaire Cloud M205 (Résumé rapide)', 'glossaire cloud m205 (résumé rapide)',
  h3('SLA')+
  p('Contrat de niveau de service.')+
  h3('CAPEX')+
  p('Investissement matériel initial.')+
  h3('OPEX')+
  p('Charge d\u2019exploitation récurrente.')+
  h3('RBAC')+
  p('Contrôle d\u2019accès basé sur les rôles.')+
  h3('IAM')+
  p('Gestion des identités et accès.')+
  h3('NSG')+
  p('Pare-feu virtuel Azure.')+
  h3('VNet')+
  p('Réseau privé virtuel Azure.')+
  h3('VPC')+
  p('Réseau privé virtuel AWS/GCP.')+
  h3('Floating IP')+
  p('IP publique assignée à une instance privée dans OpenStack.')+
  h3('IaC')+
  p('Infrastructure as Code.')
),
S(57, 's57', 'Récapitulatif OpenStack ultra-court', 'récapitulatif openstack ultra-court',
  ul(['Horizon = tableau de bord web.','Nova = calcul / VMs.','Keystone = identité / tokens / permissions.','Glance = images de VM.','Neutron = réseau virtuel.','Cinder = stockage bloc.','Swift = stockage objet.','Heat = orchestration YAML.','Ceilometer = télémétrie / métriques.'])
),
S(58, 's58', 'Mémo final Cloud M205', 'mémo final cloud m205',
  ul(['Cloud = accès réseau à des ressources partagées.','NIST = définition officielle.','LLMEM = Libre-service, Large accès, Mise en commun, Élasticité, Mesure.','CAPEX = achat matériel.','OPEX = paiement usage.','IaaS = infrastructure, client gère OS.','PaaS = plateforme, client gère code.','SaaS = logiciel prêt à utiliser.','Cloud public = fournisseur tiers, multi-tenant.','Cloud privé = dédié à une organisation, single-tenant.','Cloud hybride = public + privé.','Virtualisation = abstraction matériel.','VM = OS complet.','Conteneur = partage kernel.','Docker = conteneurisation.','Kubernetes = orchestration conteneurs.','AWS = EC2, S3, RDS, VPC, IAM.','Azure = VM, Blob, SQL, VNet, Azure AD.','GCP = Compute Engine, Cloud Storage, Cloud SQL, GKE.','SLA = disponibilité garantie.','SLA composite = multiplication des SLA.','LRS = redondance locale.','ZRS = redondance par zones.','GRS = redondance géographique.','GZRS = zones + géographie.','IAM/RBAC = accès selon rôle.','NSG/Security Group = pare-feu virtuel.','OpenStack = cloud open source.','Undercloud = gestion infra.','Overcloud = cloud consommé.','Nova = VMs.','Neutron = réseau.','Cinder = bloc.','Swift = objet.','Glance = images.','Keystone = identité.','Horizon = dashboard.','Heat = orchestration.','Ceilometer = métriques.','Ansible = push, agentless, YAML.','Puppet = pull, agent, DSL.','IaC = infrastructure décrite en code.','YAML = format lisible mais indentation critique.'])
),
S(59, 's59', 'Pièges d\u2019examen Cloud', 'pièges d\u2019examen cloud',
  piege(['Cloud privé ≠ simple serveur local.','Un vrai cloud privé doit respecter les caractéristiques NIST.','IaaS ≠ serveur physique loué.','IaaS = VM flexible et facturée à l\u2019usage.','PaaS ≠ SaaS.','PaaS = plateforme pour développer.','SaaS = logiciel fini.','Élasticité ≠ simple scalabilité manuelle.','Élasticité = adaptation rapide selon charge.','CAPEX ≠ OPEX.','Cloud public = multi-tenant.','Cloud privé = single-tenant.','Cloud hybride = public + privé connectés.','VM ≠ conteneur.','VM inclut un OS complet.','Conteneur partage le kernel.','Docker ≠ Kubernetes.','Docker crée/exécute conteneurs.','Kubernetes orchestre conteneurs.','SLA composite est souvent inférieur aux SLA individuels.','Snapshot ≠ stratégie complète de sauvegarde.','Arrêter une VM ne supprime pas toujours les coûts.','Un disque orphelin peut continuer à coûter.','IAM mal configuré = risque majeur.','RBAC doit suivre le moindre privilège.','OpenStack fonctionne sous Linux.','Horizon n\u2019est pas le service de calcul.','Nova ne gère pas les images.','Glance gère les images.','Neutron gère réseaux, sous-réseaux, routeurs et IP flottantes.','Cinder = stockage bloc.','Swift = stockage objet.','Heat = orchestration, pas monitoring.','Ceilometer = télémétrie, pas orchestration.','All-in-one OpenStack = lab, pas production.','Ansible = push sans agent.','Puppet = pull avec agent.','YAML dépend fortement de l\u2019indentation.','---'])
)
]);
