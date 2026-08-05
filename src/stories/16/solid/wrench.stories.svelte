<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import WrenchSvelte from '../../../lib/16/solid/wrench.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: WrenchSvelte,
		args: { class: '' },
	})
</script>

<Story name="Wrench" />
