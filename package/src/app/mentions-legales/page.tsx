import Link from 'next/link'

export const metadata = {
    title: 'Mentions Légales - GoSitePro',
    description: 'Mentions légales de GoSitePro.',
}

const MentionsLegales = () => {
    return (
        <main className="bg-white dark:bg-gray-900 pt-32 pb-24">
            <div className="container mx-auto px-4 max-w-4xl">
                <h1 className="text-4xl font-bold mb-12 text-gray-900 dark:text-white">Mentions Légales</h1>

                <div className="prose dark:prose-invert max-w-none space-y-12">

                    <section>
                        <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">1. Éditeur du site</h2>
                        <p className="text-gray-600 dark:text-gray-300">
                            Le site <strong>GoSitePro</strong> (ci-après &quot;le Site&quot;) est édité par :<br /><br />
                            <strong>Rayan Rousfi</strong><br />
                            (Entrepreneur Individuel / Micro-entreprise)<br />
                            <strong>Email :</strong> contact@gositepro.fr<br />
                            <strong>Téléphone :</strong> 06 22 41 25 15<br />
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">2. Hébergement</h2>
                        <p className="text-gray-600 dark:text-gray-300">
                            Le Site est hébergé par :<br /><br />
                            <strong>Vercel Inc.</strong><br />
                            440 N Barranca Ave #4133<br />
                            Covina, CA 91723<br />
                            États-Unis<br />
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">3. Propriété intellectuelle</h2>
                        <p className="text-gray-600 dark:text-gray-300">
                            L&apos;ensemble de ce site relève de la législation française et internationale sur le droit d&apos;auteur et la propriété intellectuelle.
                            Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">4. Données personnelles</h2>
                        <p className="text-gray-600 dark:text-gray-300">
                            Les informations recueillies via le formulaire de contact sont destinées exclusivement à GoSitePro pour la gestion de votre demande.
                            Conformément à la loi &quot;Informatique et Libertés&quot;, vous disposez d&apos;un droit d&apos;accès, de rectification et de suppression des données vous concernant.
                            Pour plus de détails, consultez notre <Link href="/politique-de-confidentialite" className="text-blue-600 underline">Politique de Confidentialité</Link>.
                        </p>
                    </section>

                </div>
            </div>
        </main>
    )
}

export default MentionsLegales
