/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  gettingStarted: {
    'Getting started': ['introduction'],
  },

  guidelines: {
    'Guidelines':[{
      type: 'doc',
      id: 'guidelines',
    }],
    'Eco-System': ['eco-system'],
    'Developer Guides': ['dev-guides', 'clean-code'],
    'Designer Guides': ['digital-design', {
      type: 'category',
      label: 'Design Strategy',
      items: ['design-strategy', 'brand-strategy', 'crossfunctionality', 'competitors'],
    },
    {
      type: 'category',
      label: 'Design Principles',
      items: ['design-principles', 'proximity', 'similarity', 'contrast',  'hierachy-storytelling', 'repetition'],
    },
    {
      type: 'category',
      label: 'Digital Design',
      items: ['digital-design', 'design-tokens', 'responsive-design', 'colors', 'opacity', 'typography', 'spacings', 'shadows', 'borders', 'iconography', 'imagery', 'layout-composing'],
    },
    'interaction', 'animation', 'accessability'],
    'Editorial Guides': ['editorial-guides'], 
    'Corporate Language': ['corporate-language'],
    'SEO Guides': ['seo-guides']
  },
  
};
