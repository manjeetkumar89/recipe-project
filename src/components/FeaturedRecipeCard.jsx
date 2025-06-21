import React from 'react'
import { Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const FeaturedRecipeCard = (props) => {
    const { f_id, f_image, f_title, f_rating, f_time, f_description } = props.featureRecipiedata;
    return (
        <Link to={`/recipies/featured/${f_id}`} key={f_id}>
            <div
                key={f_id}
                className="rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition"
            >
                <img
                    src={f_image}
                    alt={f_title}
                    className="w-full h-48 object-cover"
                />
                <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 leading-snug">
                        {f_title}
                    </h3>
                    <p>{f_description.slice(0, 100)}...</p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                            <Star size={16} className="text-yellow-400" />
                            {f_rating}
                        </span>
                        <span>{f_time}</span>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default FeaturedRecipeCard