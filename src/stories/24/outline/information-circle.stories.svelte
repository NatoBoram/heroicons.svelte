<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import InformationCircleSvelte from '../../../lib/24/outline/information-circle.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: InformationCircleSvelte,
		args: { class: '' },
	})
</script>

<Story name="InformationCircle" />
