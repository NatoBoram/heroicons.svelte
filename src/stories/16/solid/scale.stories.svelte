<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ScaleSvelte from '../../../lib/16/solid/scale.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: ScaleSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="Scale" />
