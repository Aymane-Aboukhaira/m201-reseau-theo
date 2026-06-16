addM205Sections([
S(14, 's14', 'DHCP Starvation', 'dhcp starvation',
  def('DHCP Starvation est une attaque qui épuise le pool d’adresses DHCP.')+
  h3('Fonctionnement')+
  ul(['L’attaquant envoie beaucoup de requêtes DHCP Discover.','Il utilise de fausses adresses MAC.','Le serveur DHCP attribue toutes les adresses disponibles.','Les vrais clients ne reçoivent plus d’adresse IP.'])+
  h3('Impact')+
  ul(['Déni de service réseau.','Clients légitimes sans connectivité.'])+
  h3('Solutions')+
  ul(['DHCP Snooping.','Limitation du nombre de requêtes DHCP par port.','Port Security.'])
),
S(15, 's15', 'DHCP Spoofing', 'dhcp spoofing',
  def('DHCP Spoofing est une attaque où un faux serveur DHCP répond aux clients.')+
  h3('Fonctionnement')+
  ul(['L’attaquant place un serveur DHCP non autorisé.','Il distribue une mauvaise configuration réseau.'])+
  h3('Paramètres falsifiés possibles')+
  ul(['Passerelle par défaut.','DNS.','Adresse IP.','Domaine.','Routes.'])+
  h3('Impact')+
  ul(['Man-in-the-Middle.','Redirection du trafic.','Interception de données.','Déni de service.'])+
  h3('Solution')+
  p('DHCP Snooping.')+
  h3('Principe DHCP Snooping')+
  ul(['Ports vers vrais serveurs DHCP = Trusted.','Ports utilisateurs = Untrusted.','Les DHCP Offer venant d’un port Untrusted sont bloqués.'])
),
S(16, 's16', 'ARP Spoofing / ARP Poisoning', 'arp spoofing / arp poisoning',
  def('ARP Spoofing est une attaque qui falsifie les associations IP ↔ MAC.')+
  h3('Fonctionnement')+
  ul(['L’attaquant envoie de fausses réponses ARP.','Il fait croire à la victime que sa MAC est celle de la passerelle.','Il fait croire à la passerelle que sa MAC est celle de la victime.'])+
  h3('Impact')+
  ul(['Man-in-the-Middle.','Sniffing.','Modification du trafic.','Redirection.','Vol d’identifiants.'])+
  h3('Solution')+
  ul(['DAI.','Dynamic ARP Inspection.'])+
  h3('Principe DAI')+
  ul(['Vérifie les messages ARP.','Compare avec la base DHCP Snooping.','Bloque les associations IP/MAC invalides.'])
),
S(17, 's17', 'Usurpation IP/MAC', 'usurpation ip/mac',
  def('L’attaquant utilise une fausse adresse IP ou MAC.')+
  h3('Objectif')+
  ul(['Contourner une restriction.','Se faire passer pour une autre machine.','Échapper à un filtrage.','Voler une identité réseau.'])+
  h3('Solution')+
  ul(['IP Source Guard.','Port Security.','DHCP Snooping.'])
),
S(18, 's18', 'Attaque STP', 'attaque stp',
  def('Attaque visant à manipuler STP pour modifier la topologie réseau.')+
  h3('Fonctionnement')+
  ul(['L’attaquant envoie des BPDU.','Il tente de devenir Root Bridge.','Le trafic peut être redirigé vers lui.'])+
  h3('Impact')+
  ul(['Interception de trafic.','Instabilité réseau.','Boucles.','Perte de disponibilité.'])+
  h3('Solutions')+
  ul(['BPDU Guard.','Root Guard.'])+
  h3('BPDU Guard')+
  ul(['Protège les ports access / PortFast.','Si une BPDU est reçue, le port passe en err-disabled.'])+
  h3('Root Guard')+
  ul(['Empêche un port de devenir chemin vers un nouveau Root Bridge non autorisé.','Protège l’élection STP.'])
),
S(19, 's19', 'DTP Security', 'dtp security',
  h3('DTP')+
  ul(['Dynamic Trunking Protocol.','Protocole Cisco négociant automatiquement la formation d’un trunk.'])+
  h3('Risque')+
  ul(['Un attaquant peut tenter de transformer un port access en trunk.','Cela peut faciliter VLAN Hopping.'])+
  h3('Protection')+
  ul(['Désactiver DTP.','Configurer explicitement les ports utilisateurs en access.','Utiliser `switchport nonegotiate` sur les trunks nécessaires.','Désactiver les ports inutilisés.'])
),
S(20, 's20', 'Port Security', 'port security',
  def('Port Security limite le nombre d’adresses MAC valides autorisées sur un port de switch.')+
  h3('Objectifs')+
  ul(['Empêcher les connexions non autorisées.','Réduire MAC Flooding.','Limiter les équipements connectés à un port.','Sécuriser les ports access.'])+
  h3('Méthodes d’apprentissage')+
  h4('Manuelle')+
  p('L’administrateur configure les MAC autorisées.')+
  h4('Dynamique')+
  ul(['Le switch apprend automatiquement.','Perdu après redémarrage.'])+
  h4('Sticky')+
  ul(['Le switch apprend automatiquement.','Enregistre dans la running-config.','Peut être conservé si sauvegardé.'])+
  h3('Modes de violation')+
  h4('Shutdown')+
  ul(['Mode par défaut.','Le port passe en err-disabled.','Message syslog : oui.','Nécessite remise en service.'])+
  h4('Restrict')+
  ul(['Supprime les paquets suspects.','Incrémente le compteur.','Message syslog : oui.','Le port reste actif.'])+
  h4('Protect')+
  ul(['Supprime les paquets suspects silencieusement.','Pas de syslog.','Pas de compteur.','Le port reste actif.'])+
  piege(['Shutdown = err-disabled.','Restrict = log + compteur.','Protect = silencieux.','---'])
),
S(21, 's21', 'DHCP Snooping', 'dhcp snooping',
  def('DHCP Snooping est une protection couche 2 contre les attaques DHCP.')+
  h3('Rôle')+
  ul(['Bloquer les faux serveurs DHCP.','Protéger contre DHCP Spoofing.','Limiter DHCP Starvation.','Construire une base IP/MAC/port/VLAN.'])+
  h3('Ports Trusted')+
  ul(['Ports connectés aux vrais serveurs DHCP.','Les réponses DHCP y sont autorisées.'])+
  h3('Ports Untrusted')+
  ul(['Ports utilisateurs.','Les réponses DHCP y sont bloquées.'])+
  h3('Utilité de la base DHCP Snooping')+
  ul(['Utilisée par DAI.','Utilisée par IP Source Guard.'])
),
S(22, 's22', 'DAI — Dynamic ARP Inspection', 'dai — dynamic arp inspection',
  def('DAI inspecte les paquets ARP pour bloquer les attaques ARP Spoofing.')+
  h3('Fonctionnement')+
  ul(['Vérifie les correspondances IP/MAC.','S’appuie sur la base DHCP Snooping.','Bloque les paquets ARP invalides.'])+
  h3('Objectif')+
  p('Empêcher Man-in-the-Middle via ARP Poisoning.')
),
S(23, 's23', 'IP Source Guard', 'ip source guard',
  def('IP Source Guard empêche l’usurpation d’adresse IP sur les ports d’accès.')+
  h3('Fonctionnement')+
  ul(['Vérifie que l’adresse IP source correspond :','au port ;','à la MAC ;','au VLAN ;','à la base DHCP Snooping.'])+
  h3('Objectif')+
  p('Bloquer IP Spoofing.')
),
S(24, 's24', 'Malware', 'malware',
  def('Malware signifie logiciel malveillant. C’est un programme conçu pour nuire, voler, espionner ou contrôler un système.')+
  h3('Types')+
  ul(['Virus.','Ver.','Cheval de Troie.','Ransomware.','Spyware.','Keylogger.','Rootkit.','Scumware.','Hijacker.','Stealware.'])
),
S(25, 's25', 'Virus', 'virus',
  def('Programme malveillant qui s’attache à un fichier ou programme légitime.')+
  h3('Fonctionnement')+
  ul(['S’exécute quand le fichier infecté est lancé.','Peut se propager à d’autres fichiers.'])+
  h3('Impact')+
  ul(['Corruption.','Suppression.','Ralentissement.','Propagation.'])
),
S(26, 's26', 'Ver informatique', 'ver informatique',
  def('Malware capable de se propager automatiquement sur le réseau.')+
  h3('Différence avec virus')+
  ul(['Le ver n’a pas besoin de fichier hôte.','Il peut se répliquer seul.'])+
  h3('Impact')+
  ul(['Saturation réseau.','Propagation massive.','Exploitation de failles.'])
),
]);
