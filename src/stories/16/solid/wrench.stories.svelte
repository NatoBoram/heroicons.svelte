<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import WrenchSvelte from '../../../lib/16/solid/wrench.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: WrenchSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="Wrench" />
