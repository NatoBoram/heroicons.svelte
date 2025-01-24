<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import Cog8ToothSvelte from '../../../lib/16/solid/cog-8-tooth.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: Cog8ToothSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="Cog8Tooth" />
