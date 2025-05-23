import React, { useState, useEffect } from 'react';
import { Users, Trophy, MapPin, Star, ArrowRight, Play, CheckCircle, Award, Lightbulb, Heart, Building2, Database, Calculator, FileText } from 'lucide-react';

const UbuntuChallengeCTD = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const testimonials = [
    {
      name: "Marie Tchinda",
      role: "Ingénieure Génie Civil",
      location: "Commune de Douala 3ème",
      text: "Grâce à Ubuntu Challenge CTD, notre solution de gestion des eaux pluviales a été adoptée par 5 communes. 1,200,000 FCFA de prime !",
      avatar: "M"
    },
    {
      name: "Paul Mbarga",
      role: "Informaticien",
      location: "Commune de Yaoundé 2ème",
      text: "Mon équipe a digitalisé l'état civil de 3 arrondissements. La plateforme nous a permis de transformer cette idée en business.",
      avatar: "P"
    },
    {
      name: "Sandrine Fouda",
      role: "Économiste locale",
      location: "Commune de Bafoussam",
      text: "Notre système de collecte des taxes communales augmente les recettes de 40%. Ubuntu CTD nous a donné les outils pour y arriver.",
      avatar: "S"
    }
  ];

  const challenges = [
    {
      title: "Digitalisation de l'état civil",
      location: "Yaoundé 1er, 2ème, 3ème",
      sponsor: "MINDDEVEL",
      prize: "2,000,000 FCFA",
      participants: 45,
      tools: ["Base de données", "API gouvernementale", "Formation"]
    },
    {
      title: "Gestion smart des déchets",
      location: "Douala 1er à 6ème",
      sponsor: "HYSACAM + Communes",
      prize: "1,500,000 FCFA",
      participants: 67,
      tools: ["IoT sensors", "Cartographie", "Budget pilote"]
    },
    {
      title: "Optimisation recettes fiscales",
      location: "Toutes CTD Centre",
      sponsor: "MINFI + FEICOM",
      prize: "1,800,000 FCFA",
      participants: 34,
      tools: ["Données fiscales", "IA prédictive", "Expertise comptable"]
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">U</span>
              </div>
              <div>
                <span className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                  Ubuntu Challenge
                </span>
                <div className="text-xs text-gray-600 font-medium">CTD CAMEROUN</div>
              </div>
            </div>
            
            <div className="hidden md:flex items-center gap-8">
              <a href="#comment-ca-marche" className="text-gray-600 hover:text-orange-600 font-medium transition-colors">
                Comment ça marche
              </a>
              <a href="#defis" className="text-gray-600 hover:text-orange-600 font-medium transition-colors">
                Défis CTD
              </a>
              <a href="#outils" className="text-gray-600 hover:text-orange-600 font-medium transition-colors">
                Nos outils
              </a>
              <a href="#temoignages" className="text-gray-600 hover:text-orange-600 font-medium transition-colors">
                Témoignages
              </a>
              <button className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-6 py-2 rounded-full font-medium hover:shadow-lg transition-all">
                Participer
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 bg-gradient-to-br from-orange-50 via-white to-red-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium">
                  <Building2 className="w-4 h-4" />
                  Innovation pour nos Collectivités
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Transformez vos
                  <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                    {" "}Collectivités
                  </span>
                  <br />avec l'innovation
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Rejoignez les innovateurs camerounais qui révolutionnent la gouvernance locale. 
                  Résolvez les défis de vos communes, arrondissements et régions avec nos outils 
                  et gagnez jusqu'à <span className="font-bold text-orange-600">2 millions de FCFA</span>.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-xl transition-all flex items-center justify-center gap-2">
                  Commencer maintenant
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button 
                  onClick={() => setIsVideoPlaying(true)}
                  className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-2xl font-bold text-lg hover:border-orange-500 hover:text-orange-600 transition-all flex items-center justify-center gap-2"
                >
                  <Play className="w-5 h-5" />
                  Voir la démo
                </button>
              </div>

              <div className="flex items-center gap-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">180+</div>
                  <div className="text-sm text-gray-600">CTD partenaires</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">67</div>
                  <div className="text-sm text-gray-600">Solutions déployées</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600">25M+</div>
                  <div className="text-sm text-gray-600">FCFA économisés</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-r from-orange-500 to-red-600 rounded-3xl p-8 text-white shadow-2xl">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold">Défi prioritaire</h3>
                    <div className="bg-white/20 px-3 py-1 rounded-full text-sm">
                      URGENT
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Améliorer la collecte des taxes foncières</h4>
                    <p className="text-white/80 text-sm">
                      Les communes du Centre perdent 60% de leurs recettes potentielles. 
                      Trouvez des solutions digitales innovantes.
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="text-white/60">Sponsor</div>
                      <div className="font-medium">MINFI + FEICOM</div>
                    </div>
                    <div>
                      <div className="text-white/60">CTD concernées</div>
                      <div className="font-medium">58 communes</div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        <span className="text-sm">12 équipes</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Trophy className="w-4 h-4" />
                        <span className="text-sm">1,800,000 FCFA</span>
                      </div>
                    </div>
                    <button className="bg-white text-orange-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                      Participer
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-yellow-400 w-16 h-16 rounded-2xl flex items-center justify-center animate-bounce">
                <Building2 className="w-8 h-8 text-white" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-blue-500 w-12 h-12 rounded-xl flex items-center justify-center animate-pulse">
                <Lightbulb className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comment ça marche */}
      <section id="comment-ca-marche" className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Comment révolutionner vos CTD ?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Un processus simple et efficace pour transformer la gouvernance locale au Cameroun
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all border border-gray-100 hover:border-orange-200">
              <div className="text-orange-600 mb-3">
                <MapPin className="w-6 h-6" />
              </div>
              <div className="text-sm font-bold text-orange-500 mb-2">01</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Identifiez le défi CTD</h3>
              <p className="text-gray-600 text-sm">Choisissez parmi les défis prioritaires des communes, arrondissements et régions camerounaises</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all border border-gray-100 hover:border-orange-200">
              <div className="text-orange-600 mb-3">
                <Database className="w-6 h-6" />
              </div>
              <div className="text-sm font-bold text-orange-500 mb-2">02</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Accédez aux ressources</h3>
              <p className="text-gray-600 text-sm">Utilisez nos données officielles, outils techniques et budgets pilotes fournis</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all border border-gray-100 hover:border-orange-200">
              <div className="text-orange-600 mb-3">
                <Users className="w-6 h-6" />
              </div>
              <div className="text-sm font-bold text-orange-500 mb-2">03</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Développez en équipe</h3>
              <p className="text-gray-600 text-sm">Collaborez avec d'autres experts locaux et bénéficiez de notre accompagnement</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all border border-gray-100 hover:border-orange-200">
              <div className="text-orange-600 mb-3">
                <Award className="w-6 h-6" />
              </div>
              <div className="text-sm font-bold text-orange-500 mb-2">04</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Déployez et gagnez</h3>
              <p className="text-gray-600 text-sm">Votre solution est testée dans les CTD partenaires et vous êtes récompensé</p>
            </div>
          </div>
        </div>
      </section>

      {/* Écosystème */}
      <section id="outils" className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Un écosystème complet pour l'innovation CTD
            </h2>
            <p className="text-xl text-gray-600">
              Nous mettons à disposition tous les outils nécessaires pour réussir
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-shadow">
              <div className="text-orange-600 mb-3 flex justify-center">
                <Database className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Données officielles</h3>
              <p className="text-gray-600 text-sm">Accès aux bases de données gouvernementales et statistiques CTD</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-shadow">
              <div className="text-orange-600 mb-3 flex justify-center">
                <Lightbulb className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Outils techniques</h3>
              <p className="text-gray-600 text-sm">Plateformes de développement, APIs et technologies innovantes</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-shadow">
              <div className="text-orange-600 mb-3 flex justify-center">
                <Calculator className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Financement</h3>
              <p className="text-gray-600 text-sm">Budgets pilotes et accès facilité aux fonds FEICOM</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-shadow">
              <div className="text-orange-600 mb-3 flex justify-center">
                <FileText className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Expertise</h3>
              <p className="text-gray-600 text-sm">Accompagnement par des experts et formation spécialisée</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl p-6 text-white text-center">
            <h3 className="text-xl font-bold mb-4">Partenaires institutionnels stratégiques</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white/20 rounded-lg p-3">
                <div className="font-bold text-sm">MINDDEVEL</div>
                <div className="text-xs opacity-80">Décentralisation</div>
              </div>
              <div className="bg-white/20 rounded-lg p-3">
                <div className="font-bold text-sm">FEICOM</div>
                <div className="text-xs opacity-80">Financement CTD</div>
              </div>
              <div className="bg-white/20 rounded-lg p-3">
                <div className="font-bold text-sm">MINFI</div>
                <div className="text-xs opacity-80">Données fiscales</div>
              </div>
              <div className="bg-white/20 rounded-lg p-3">
                <div className="font-bold text-sm">CVUC</div>
                <div className="text-xs opacity-80">Réseau maires</div>
              </div>
            </div>
            <p className="text-orange-100 text-sm mt-4">
              Accès direct aux institutions clés de la gouvernance locale camerounaise
            </p>
          </div>
        </div>
      </section>

      {/* Défis CTD actifs */}
      <section id="defis" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Défis CTD prioritaires
            </h2>
            <p className="text-xl text-gray-600">
              Résolvez les vrais problèmes de nos collectivités territoriales
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {challenges.map((challenge, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-gray-100">
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center gap-2 text-orange-600">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm font-medium">{challenge.location}</span>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-orange-600">{challenge.prize}</div>
                    <div className="text-xs text-gray-500">Prix total</div>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">{challenge.title}</h3>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-gray-500" />
                    <span className="text-sm text-gray-600">Sponsor: {challenge.sponsor}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-gray-500" />
                    <span className="text-sm text-gray-600">{challenge.participants} équipes actives</span>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="text-sm font-medium text-gray-700 mb-2">Outils fournis :</div>
                  <div className="flex flex-wrap gap-2">
                    {challenge.tools.map((tool, toolIndex) => (
                      <span key={toolIndex} className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-xs">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
                
                <button className="w-full bg-gradient-to-r from-orange-500 to-red-600 text-white py-3 px-6 rounded-xl font-medium hover:shadow-lg transition-all">
                  Rejoindre ce défi
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section id="temoignages" className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Ils transforment déjà nos CTD
            </h2>
            <p className="text-xl text-gray-600">
              Découvrez les success stories de nos innovateurs CTD
            </p>
          </div>

          <div className="relative">
            <div className="bg-white rounded-3xl p-12 shadow-2xl border border-gray-100 max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  {testimonials[currentTestimonial].avatar}
                </div>
                <h3 className="text-xl font-bold text-gray-900">{testimonials[currentTestimonial].name}</h3>
                <p className="text-gray-600">{testimonials[currentTestimonial].role}</p>
                <p className="text-sm text-orange-600 font-medium">{testimonials[currentTestimonial].location}</p>
              </div>
              
              <blockquote className="text-xl text-gray-700 text-center italic leading-relaxed">
                "{testimonials[currentTestimonial].text}"
              </blockquote>
              
              <div className="flex justify-center mt-8 gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentTestimonial ? 'bg-orange-600' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-4 bg-gradient-to-r from-orange-500 to-red-600 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">180+</div>
              <div className="text-orange-100">CTD partenaires</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">67</div>
              <div className="text-orange-100">Solutions déployées</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">94%</div>
              <div className="text-orange-100">Taux de satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">10</div>
              <div className="text-orange-100">Régions couvertes</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Prêt à révolutionner la gouvernance locale ?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Rejoignez Ubuntu Challenge CTD et transformez l'avenir de vos collectivités territoriales
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-xl transition-all">
              Commencer mon projet CTD
            </button>
            <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-2xl font-bold text-lg hover:border-orange-500 hover:text-orange-600 transition-all">
              Contacter notre équipe
            </button>
          </div>
          
          <p className="text-sm text-gray-500 mt-4">
            ✓ Accès aux données officielles ✓ Budget pilote fourni ✓ Accompagnement expert
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">U</span>
                </div>
                <div>
                  <span className="text-xl font-bold">Ubuntu Challenge</span>
                  <div className="text-xs text-gray-400">CTD CAMEROUN</div>
                </div>
              </div>
              <p className="text-gray-400 text-sm">
                Ensemble, nous bâtissons l'avenir de la gouvernance locale camerounaise.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Plateforme CTD</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Défis par région</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Outils disponibles</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Partenaires institutionnels</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Success stories</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Support CTD</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Guide des maires</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Formation en ligne</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Assistance technique</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Communauté CTD</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Partenaires</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>MINDDEVEL</li>
                <li>FEICOM</li>
                <li>CVUC</li>
                <li>Communes du Cameroun</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2025 Ubuntu Challenge CTD. Innovation pour la gouvernance locale camerounaise.</p>
          </div>
        </div>
      </footer>

      {/* Video Modal */}
      {isVideoPlaying && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-8 max-w-2xl w-full">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold">Découvrez Ubuntu Challenge CTD</h3>
              <button 
                onClick={() => setIsVideoPlaying(false)}
                className="text-gray-500 hover:text-gray-700 text-2xl"
              >
                ×
              </button>
            </div>
            <div className="bg-gray-100 rounded-xl h-64 flex items-center justify-center">
              <div className="text-center">
                <Play className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600">Démo plateforme CTD</p>
                <p className="text-sm text-gray-500">Durée: 4 minutes</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UbuntuChallengeCTD;