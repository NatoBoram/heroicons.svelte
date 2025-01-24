<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import Cog8ToothSvelte from '../../../lib/24/solid/cog-8-tooth.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: Cog8ToothSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="Cog8Tooth" />
