<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import LifebuoySvelte from '../../../lib/24/outline/lifebuoy.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: LifebuoySvelte,
		args: { class: '' },
	})
</script>

<Story name="Lifebuoy" />
