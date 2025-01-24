<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ScaleSvelte from '../../../lib/24/outline/scale.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: ScaleSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="Scale" />
