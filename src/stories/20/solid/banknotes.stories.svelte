<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import BanknotesSvelte from '../../../lib/20/solid/banknotes.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: BanknotesSvelte,
		args: { class: 'w-5 h-5' },
	})
</script>

<Story name="Banknotes" />
