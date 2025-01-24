<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ScaleSvelte from '../../../lib/24/solid/scale.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: ScaleSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="Scale" />
