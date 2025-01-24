<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import PlusSvelte from '../../../lib/24/solid/plus.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: PlusSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="Plus" />
