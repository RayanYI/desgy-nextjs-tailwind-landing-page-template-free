import Link from 'next/link'

export const metadata = {
    title: 'Mentions Légales - GoSitePro',
    description: 'Mentions légales de GoSitePro.',
}

const MentionsLegales = () => {
    return (
        <main className="bg-gray-50 dark:bg-gray-950 min-h-screen pt-32 pb-24 relative overflow-hidden">
            {/* Background Decoration */}
            <div className='absolute top-0 right-1/2 translate-x-1/2 w-full max-w-7xl h-96 bg-indigo-500/5 blur-3xl rounded-full -z-10'></div>

            <div className="container mx-auto px-4 max-w-3xl relative z-10">
                <div className="text-center mb-12">
                    <h1 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white tracking-tight">
                        Mentions Légales
                    </h1>
                    <p className="text-gray-500 dark:text-gray-400">
                        Informations légales obligatoires.
                    </p>
                </div>

                <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-xl shadow-gray-200/50 dark:shadow-none border border-gray-100 dark:border-gray-800 p-8 md:p-12">
                    <div className="prose prose-lg prose-blue dark:prose-invert max-w-none">

                        <section className="mb-8">
                            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                                <span className="w-1.5 h-6 bg-blue-600 rounded-full"></span>
                                Éditeur du site
                            </h2>
                            <p className="text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700">
                                Le site <strong>GoSitePro</strong> est édité par :<br /><br />
                                <span className="block mb-1"><strong>Rayan Rousfi</strong></span>
                                <span className="block mb-1 text-sm text-gray-500">(Entrepreneur Individuel)</span>
                                <span className="block mb-1"><strong>contact@gositepro.fr</strong></span>
                                <span className="block"><strong>06 22 41 25 15</strong></span>
                            </p>
                        </section>

                        <div className="w-full h-px bg-gray-100 dark:bg-gray-800 my-8"></div>

                        <section className="mb-8">
                            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                                <span className="w-1.5 h-6 bg-blue-600 rounded-full"></span>
                                Hébergement
                            </h2>
                            <p className="text-gray-600 dark:text-gray-300">
                                Le Site est hébergé par :<br />
                                <strong>Vercel Inc.</strong><br />
                                440 N Barranca Ave #4133<br />
                                Covina, CA 91723<br />
                                États-Unis
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                                <span className="w-1.5 h-6 bg-blue-600 rounded-full"></span>
                                Propriété intellectuelle
                            </h2>
                            <p className="text-gray-600 dark:text-gray-300">
                                L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle.
                                Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                                <span className="w-1.5 h-6 bg-blue-600 rounded-full"></span>
                                Données personnelles
                            </h2>
                            <p className="text-gray-600 dark:text-gray-300">
                                Conformément à la loi "Informatique et Libertés", vous disposez d'un droit d'accès, de rectification et de suppression des données vous concernant.
                                Pour plus de détails, consultez notre <Link href="/politique-de-confidentialite" className="text-blue-600 hover:underline font-semibold">Politique de Confidentialité</Link>.
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

export default MentionsLegales
