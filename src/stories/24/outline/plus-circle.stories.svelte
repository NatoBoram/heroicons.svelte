<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import PlusCircleSvelte from '../../../lib/24/outline/plus-circle.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: PlusCircleSvelte,
		args: { class: '' },
	})
</script>

<Story name="PlusCircle" />
