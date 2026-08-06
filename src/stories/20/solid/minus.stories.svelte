<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import MinusSvelte from '../../../lib/20/solid/minus.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: MinusSvelte,
		args: { class: '' },
	})
</script>

<Story name="Minus" />
