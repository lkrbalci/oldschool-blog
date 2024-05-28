import Image from "next/image";
import React from "react";

type Props = {};

const text = `  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta quis eos perferendis dolor omnis, nobis perspiciatis laborum assumenda et recusandae sit repellendus eaque architecto nesciunt blanditiis nihil suscipit. Totam autem saepe excepturi, enim vero doloribus rerum consectetur, molestias quia debitis assumenda, tempora reprehenderit fugit error eligendi voluptate in repellat ratione sit quisquam velit. Blanditiis suscipit fugiat soluta laborum cumque delectus dignissimos necessitatibus esse neque fuga autem iste aut, nostrum, temporibus error velit distinctio! Voluptatum cum doloribus repellat dignissimos iure vero veniam, tempora nemo eum odit, ullam ducimus fuga harum ad praesentium nesciunt earum facere sit aliquam explicabo iste officiis vitae delectus sapiente! Ea porro facere ullam, eveniet impedit consectetur! Rem aliquam voluptatibus harum dolore tempore voluptas expedita explicabo sequi impedit incidunt. Illo distinctio, voluptatem iure sequi quasi possimus. Minima laudantium error excepturi fuga tempore, beatae commodi dolor labore ut, mollitia repellendus reiciendis odit, voluptatum alias maiores dolores. Blanditiis sed autem assumenda odit fugiat recusandae, culpa deleniti nostrum in aliquam porro non cupiditate! Sed architecto quae perspiciatis incidunt rem accusamus, impedit optio vel veritatis velit laborum praesentium magnam ex, officiis quam amet quos eum. Neque nesciunt quibusdam, a obcaecati quidem ullam ipsam, eveniet aspernatur inventore, laborum asperiores soluta nostrum at consectetur corporis

  Incidunt quaerat cupiditate voluptatum molestiae soluta officia suscipit fugiat, quia, voluptatem commodi beatae! Dolore quia vel, eligendi unde quam eius velit ipsa vitae fuga suscipit, obcaecati ratione sit! Corrupti nulla dolores minima autem distinctio quas ducimus doloribus cumque laboriosam dolorem, necessitatibus in nisi tenetur modi vel facere fugit ullam architecto neque rem eveniet! Saepe, impedit quod ab quas nobis laudantium vitae laboriosam accusamus iste ut. Exercitationem maiores accusamus, quae facere saepe quis commodi veniam magni cum ab molestiae, distinctio dolorem odio mollitia adipisci itaque, eius ipsam? Voluptates, eveniet dolorum voluptatem reiciendis laudantium fugiat sapiente deleniti aperiam aliquam alias eum accusamus earum veritatis quod! Nemo eos minus quasi ipsam necessitatibus perspiciatis laborum repellat iusto maiores aspernatur corporis tempore minima nostrum, possimus aliquam, cumque neque aperiam porro? Voluptatum illo eligendi voluptatem quibusdam velit cum nesciunt autem similique repellendus consequuntur minus, ratione corrupti placeat nihil non soluta alias, itaque dolor deserunt odit inventore amet enim? Repellat, pariatur. Ratione eaque praesentium tenetur rem magnam aliquam reprehenderit itaque veniam distinctio architecto illo totam dolorum, ipsam non eum suscipit ea impedit a maiores, reiciendis porro dolores pariatur, veritatis neque? Praesentium ab, alias vel recusandae unde distinctio. Cupiditate cumque tempore consectetur. Beatae necessitatibus quos neque dolore cupiditate illum quod, quidem nesciunt eum facere. Eveniet debitis magni, est harum recusandae minus quae reprehenderit esse ullam repellendus pariatur! Recusandae rerum, consectetur, magni officia sapiente repudiandae repellendus veritatis tenetur maiores sint iusto nisi adipisci magnam expedita dolorum placeat assumenda! Nihil, sequi expedita accusantium corporis dolor consequatur perferendis fugiat dolorem laboriosam.
  
  Laborum modi sed quos nisi temporibus aperiam nobis error quas exercitationem incidunt ducimus molestiae vitae debitis consequuntur, sapiente repellat dolorem dolore blanditiis voluptates provident aspernatur, inventore tempore nesciunt ea. Id qui corporis exercitationem necessitatibus commodi dolorem at quasi eius similique? At ad veritatis quidem reprehenderit aspernatur, nam doloremque debitis.`;

const page = (props: Props) => {
  return (
    <article className="relative flex w-11/12 flex-col items-center">
      <h1 className="mb-8 text-2xl md:text-3xl">Missing Those Days</h1>
      <Image
        src="/header.webp"
        alt="Old Systems"
        width={1280}
        height={720}
        layout="responsive"
      />
      <div className="relative mt-8 w-10/12 whitespace-pre-wrap">
        <p className="text-lg">{text}</p>
      </div>
    </article>
  );
};

export default page;
