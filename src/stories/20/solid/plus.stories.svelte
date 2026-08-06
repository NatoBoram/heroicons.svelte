<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import PlusSvelte from '../../../lib/20/solid/plus.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: PlusSvelte,
		args: { class: '' },
	})
</script>

<Story name="Plus" />
