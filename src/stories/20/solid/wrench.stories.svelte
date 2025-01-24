<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import WrenchSvelte from '../../../lib/20/solid/wrench.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: WrenchSvelte,
		args: { class: 'w-5 h-5' },
	})
</script>

<Story name="Wrench" />
