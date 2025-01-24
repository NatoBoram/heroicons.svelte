<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ScaleSvelte from '../../../lib/20/solid/scale.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: ScaleSvelte,
		args: { class: 'w-5 h-5' },
	})
</script>

<Story name="Scale" />
