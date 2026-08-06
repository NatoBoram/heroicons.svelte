<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import PlusSvelte from '../../../lib/16/solid/plus.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: PlusSvelte,
		args: { class: '' },
	})
</script>

<Story name="Plus" />
