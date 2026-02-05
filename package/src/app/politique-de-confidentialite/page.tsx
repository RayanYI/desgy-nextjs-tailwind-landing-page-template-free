export const metadata = {
    title: 'Politique de Confidentialité - GoSitePro',
    description: 'Politique de confidentialité de GoSitePro.',
}

const PolitiqueConfidentialite = () => {
    return (
        <main className="bg-gray-50 dark:bg-gray-950 min-h-screen pt-32 pb-24 relative overflow-hidden">
            {/* Background Decoration */}
            <div className='absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-blue-500/5 blur-3xl rounded-full -z-10'></div>

            <div className="container mx-auto px-4 max-w-3xl relative z-10">
                <div className="text-center mb-12">
                    <h1 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white tracking-tight">
                        Politique de Confidentialité
                    </h1>
                    <p className="text-gray-500 dark:text-gray-400">
                        Transparence et protection de vos données.
                    </p>
                </div>

                <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-xl shadow-gray-200/50 dark:shadow-none border border-gray-100 dark:border-gray-800 p-8 md:p-12">
                    <div className="prose prose-lg prose-blue dark:prose-invert max-w-none">

                        <section className="mb-8">
                            <p className="text-gray-600 dark:text-gray-300">
                                Chez <strong>GoSitePro</strong>, nous prenons la confidentialité de vos données très au sérieux. Cette politique décrit en toute transparence comment nous traitons les informations que vous nous confiez.
                            </p>
                        </section>

                        <div className="w-full h-px bg-gray-100 dark:bg-gray-800 my-8"></div>

                        <section className="mb-8">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 font-bold text-sm">1</div>
                                <h2 className="text-xl font-bold text-gray-900 dark:text-white m-0">Données collectées</h2>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">
                                Via notre formulaire de contact, nous collectons uniquement le strict nécessaire pour vous répondre :
                            </p>
                            <ul className="text-gray-600 dark:text-gray-300 Space-y-2">
                                <li><strong>Identité :</strong> Nom et Prénom</li>
                                <li><strong>Contact :</strong> Adresse email</li>
                                <li><strong>Contexte :</strong> Type de projet souhaité</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 font-bold text-sm">2</div>
                                <h2 className="text-xl font-bold text-gray-900 dark:text-white m-0">Utilisation des données</h2>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300">
                                Vos données ne servent qu'à une seule chose : <strong>faire avancer votre projet.</strong>
                            </p>
                            <ul className="text-gray-600 dark:text-gray-300 mt-4">
                                <li>Répondre à votre demande de contact.</li>
                                <li>Établir un devis personnalisé.</li>
                                <li>Assurer le suivi du projet si nous collaborons.</li>
                            </ul>
                            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border border-blue-100 dark:border-blue-800 text-sm text-blue-800 dark:text-blue-200 mt-4">
                                <strong>Promesse :</strong> Nous ne vendons, ne louons et ne partageons jamais vos données à des tiers publicitaires.
                            </div>
                        </section>

                        <section className="mb-8">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 font-bold text-sm">3</div>
                                <h2 className="text-xl font-bold text-gray-900 dark:text-white m-0">Cookies</h2>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300">
                                Ce site est conçu pour être performant et respectueux. Nous n'utilisons <strong>pas de traceurs intrusifs</strong>. Seuls des cookies techniques essentiels au fonctionnement du site peuvent être déposés.
                            </p>
                        </section>

                        <section>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 font-bold text-sm">4</div>
                                <h2 className="text-xl font-bold text-gray-900 dark:text-white m-0">Vos droits</h2>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300">
                                Vous restez maître de vos données. Pour toute demande d'accès, de rectification ou de suppression, un simple email suffit : <a href="mailto:contact@gositepro.fr" className="text-blue-600 hover:underline">contact@gositepro.fr</a>.
                            </p>
                        </section>

                    </div>
                </div>
                <div className="text-center mt-12">
                    <a href="/" className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors">
                        ← Retour à l'accueil
                    </a>
                </div>
            </div>
        </main>
    )
}

export default PolitiqueConfidentialite
