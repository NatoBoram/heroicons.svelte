<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import BanknotesSvelte from '../../../lib/20/solid/banknotes.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: BanknotesSvelte,
		args: { class: '' },
	})
</script>

<Story name="Banknotes" />
