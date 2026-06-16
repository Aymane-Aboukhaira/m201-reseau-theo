addM205Sections([
S(40, 's40', 'IDS / IPS', 'ids / ips',
  h3('IDS')+
  ul(['Système passif.','Surveille le trafic.','Détecte les intrusions.','Génère des alertes.','Ne bloque pas directement.'])+
  h3('IPS')+
  ul(['Système actif.','Inspecte le trafic.','Détecte les attaques.','Bloque les paquets suspects.'])+
  h3('Comparaison')+
  ul(['IDS = caméra de surveillance.','IPS = agent de sécurité avec droit d’arrêt.'])+
  h3('Méthodes de détection')+
  ul(['Signatures.','Anomalies.','Comportement.','Règles.'])+
  h3('Placement')+
  ul(['IDS peut être placé en écoute miroir.','IPS doit être placé en ligne pour bloquer.'])+
  piege(['IDS ne modifie pas le trafic.','IPS peut bloquer le trafic.','---'])
),
S(41, 's41', 'AAA', 'aaa',
  def('AAA signifie : Authentication ; Authorization ; Accounting.')+
  h3('Authentication')+
  ul(['Vérifie l’identité.','Question : qui est l’utilisateur ?'])+
  h3('Authorization')+
  ul(['Détermine les droits.','Question : que peut-il faire ?'])+
  h3('Accounting')+
  ul(['Trace les actions.','Question : qu’a-t-il fait ?'])+
  h3('Méthodes AAA')+
  ul(['Locale.','Serveur centralisé.'])+
  h3('Authentification locale')+
  ul(['Comptes configurés directement sur l’équipement.','Adapté aux petits réseaux.'])+
  h3('Authentification par serveur')+
  ul(['Utilise un serveur central.','Exemples :','RADIUS ;','TACACS+.'])
),
S(42, 's42', 'RADIUS et TACACS+', 'radius et tacacs+',
  h3('RADIUS')+
  ul(['Utilisé souvent pour l’accès réseau.','Très utilisé avec 802.1X et Wi-Fi Enterprise.','Combine souvent authentification et autorisation.','Utilise UDP.'])+
  h3('TACACS+')+
  ul(['Souvent utilisé pour l’administration des équipements réseau.','Sépare authentification, autorisation et accounting.','Utilise TCP.','Chiffre davantage le contenu du paquet que RADIUS.'])+
  h3('Choisir RADIUS')+
  ul(['Pour Wi-Fi Enterprise.','Pour 802.1X.','Pour accès réseau utilisateur.'])+
  h3('Choisir TACACS+')+
  ul(['Pour administration d’équipements Cisco.','Pour contrôle précis des commandes.','Pour séparation AAA plus fine.'])
),
S(43, 's43', '802.1X', '802.1x',
  def('802.1X est un contrôle d’accès basé sur les ports.')+
  h3('Rôle')+
  ul(['Empêche les stations non autorisées de se connecter au réseau.','Le port reste bloqué jusqu’à authentification réussie.'])+
  h3('Acteurs')+
  h4('Supplicant')+
  p('Client qui veut accéder au réseau.')+
  h4('Authenticator')+
  ul(['Switch ou point d’accès.','Intermédiaire entre client et serveur.'])+
  h4('Authentication Server')+
  ul(['Serveur RADIUS.','Valide l’identité du client.'])+
  h3('Usage')+
  ul(['Réseau câblé entreprise.','WLAN Enterprise.'])
),
S(44, 's44', 'DMZ', 'dmz',
  def('DMZ signifie zone démilitarisée. C’est une zone réseau intermédiaire entre Internet et le LAN interne.')+
  h3('Rôle')+
  p('Héberger les services exposés à Internet sans exposer directement le LAN.')+
  h3('Services possibles en DMZ')+
  ul(['Serveur web.','Serveur mail.','Serveur DNS public.','Reverse proxy.','VPN concentrator.'])+
  h3('Intérêt')+
  ul(['Limiter l’impact d’une compromission.','Séparer public et privé.','Filtrer les flux entre Internet, DMZ et LAN.'])+
  h3('Architecture simple')+
  p('Internet → Pare-feu → DMZ → Pare-feu / règles strictes → LAN.')+
  h3('Architecture renforcée')+
  ul(['Deux pare-feux :','un entre Internet et DMZ ;','un entre DMZ et LAN.'])+
  piege(['DMZ n’est pas une zone de confiance totale.','Elle est moins fiable que le LAN mais plus contrôlée qu’Internet.','---'])
),
S(45, 's45', 'ASA', 'asa',
  def('ASA signifie Cisco Adaptive Security Appliance.')+
  h3('Rôle')+
  p('Appliance de sécurité Cisco.')+
  h3('Fonctions')+
  ul(['Firewall stateful.','VPN IPsec.','VPN SSL.','NAT.','ACL.','Inspection.','IPS selon module FirePOWER/Snort.'])+
  h3('Zones logiques')+
  ul(['Inside.','Outside.','DMZ.'])+
  h3('Inside')+
  p('Réseau interne de confiance.')+
  h3('Outside')+
  p('Réseau externe non fiable, souvent Internet.')+
  h3('DMZ')+
  p('Zone intermédiaire pour serveurs exposés.')+
  h3('ACL ASA')+
  ul(['Appliquées sur les interfaces.','Contrôlent le trafic entrant ou sortant.'])+
  h3('NAT ASA')+
  p('Permet la traduction d’adresses entre inside, outside et DMZ.')
),
S(46, 's46', 'ACL', 'acl',
  def('ACL signifie Access Control List. C’est une liste de règles permettant d’autoriser ou bloquer le trafic.')+
  h3('Critères')+
  ul(['IP source.','IP destination.','Protocole.','Port.','Interface.','Direction.'])+
  h3('Rôle')+
  ul(['Contrôle d’accès.','Filtrage réseau.','Segmentation.','Protection des zones.'])+
  h3('Deny implicite')+
  p('Tout ce qui n’est pas autorisé est bloqué à la fin.')+
  h3('ACL standard')+
  p('Filtre surtout selon la source.')+
  h3('ACL étendue')+
  ul(['Filtre selon :','source ;','destination ;','protocole ;','port.'])+
  piege(['ACL mal placée peut bloquer un trafic légitime.','Toujours penser au deny implicite.','---'])
),
S(47, 's47', 'NAT', 'nat',
  def('NAT signifie Network Address Translation. Il traduit les adresses privées en adresses publiques.')+
  h3('Rôle')+
  ul(['Permettre l’accès Internet aux réseaux privés.','Masquer l’adressage interne.','Économiser les IPv4 publiques.'])+
  h3('NAT statique')+
  ul(['Traduction fixe 1:1.','Une IP privée correspond toujours à une IP publique.'])+
  h4('Usage')+
  p('Publier un serveur interne.')+
  h3('NAT dynamique')+
  ul(['Utilise un pool d’adresses publiques.','Attribue une adresse selon disponibilité.'])+
  h3('PAT')+
  ul(['Port Address Translation.','Plusieurs IP privées partagent une seule IP publique.','Différenciation par ports.'])+
  piege(['NAT statique = serveur publié.','PAT = sortie Internet de plusieurs clients.','---'])
),
S(48, 's48', 'VPN', 'vpn',
  def('VPN signifie Virtual Private Network. C’est un tunnel sécurisé à travers un réseau public.')+
  h3('Objectifs')+
  ul(['Confidentialité.','Intégrité.','Authentification.','Accès distant sécurisé.','Interconnexion de sites.'])+
  h3('VPN site-à-site')+
  ul(['Relie deux réseaux distants.','Tunnel entre deux passerelles.'])+
  h3('VPN accès distant')+
  p('Relie un utilisateur distant au réseau de l’entreprise.')+
  h3('VPN SSL')+
  ul(['Utilise TLS/SSL.','Peut fonctionner via navigateur ou client.'])+
  h3('VPN IPsec')+
  p('Utilise IPsec pour sécuriser le trafic IP.')
),
S(49, 's49', 'IPsec', 'ipsec',
  def('IPsec est un ensemble de protocoles de sécurité pour IP.')+
  h3('Services fournis')+
  ul(['Confidentialité.','Intégrité.','Authentification.','Protection contre rejeu selon configuration.'])+
  h3('AH')+
  p('Authentication Header.')+
  h4('Fournit')+
  ul(['Authentification.','Intégrité.'])+
  h4('Ne fournit pas')+
  p('Chiffrement.')+
  h3('ESP')+
  p('Encapsulating Security Payload.')+
  h4('Fournit')+
  ul(['Chiffrement.','Intégrité.','Authentification.'])+
  h3('IKE')+
  ul(['Internet Key Exchange.','Négocie les paramètres de sécurité.','Établit les clés.'])+
  h3('ISAKMP')+
  p('Cadre de négociation des associations de sécurité.')+
  h3('Diffie-Hellman')+
  p('Permet l’échange sécurisé de clés sur un réseau non sécurisé.')+
  h3('Security Association')+
  p('Ensemble de paramètres négociés pour sécuriser le trafic.')+
  piege(['AH ne chiffre pas.','ESP chiffre.','---'])
),
S(50, 's50', 'GRE', 'gre',
  def('GRE signifie Generic Routing Encapsulation.')+
  h3('Rôle')+
  ul(['Encapsuler des paquets dans un tunnel.','Transporter différents protocoles.','Permettre du routage dynamique dans un tunnel.'])+
  inc(['GRE ne chiffre pas.'])+
  h3('GRE over IPsec')+
  ul(['GRE fournit le tunnel.','IPsec fournit le chiffrement et la sécurité.'])+
  piege(['GRE seul = pas sécurisé.','GRE + IPsec = tunnel sécurisé.','---'])
),
S(51, 's51', 'Cryptographie', 'cryptographie',
  def('La cryptographie protège l’information par des mécanismes mathématiques.')+
  h3('Objectifs')+
  ul(['Confidentialité.','Intégrité.','Authentification.','Non-répudiation.'])+
  h3('Chiffrement')+
  p('Transforme un message lisible en message illisible.')+
  h3('Déchiffrement')+
  p('Transforme le message illisible en message lisible.')
),
S(52, 's52', 'Chiffrement symétrique', 'chiffrement symétrique',
  def('Même clé pour chiffrer et déchiffrer.')+
  adv(['Rapide.','Adapté aux grands volumes de données.'])+
  inc(['Problème de partage sécurisé de la clé.'])+
  h3('Exemples')+
  ul(['AES.','DES ancien.','3DES ancien.'])+
  h3('Exemple examen')+
  p('Avec une clé de 64 bits, il existe `2^64` clés possibles.')+
  h3('Attaque exhaustive')+
  ul(['En moyenne, il faut essayer la moitié de l’espace des clés.','Pour 64 bits : environ `2^63` essais en moyenne.'])
),
]);
